<?php

  namespace App\Http\Controllers;

  use App\Models\SolarPanel;
  use App\Models\Image;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Storage;
  use Illuminate\Support\Facades\Log;

  class AdminController extends Controller
  {
      public function dashboard()
      {
          $solarPanels = SolarPanel::all();
          return view('admin.dashboard', compact('solarPanels'));
      }

      public function store(Request $request)
      {
          $validated = $request->validate([
              'quantity' => 'required|integer|min:1',
              'amount' => 'required|numeric|min:0',
          ]);

          $panel = new SolarPanel();
          $panel->quantity = $request->quantity;
          $panel->amount = $request->amount;
          $panel->save();

          return redirect()->back()->with('message', 'Solar panel created successfully!');
      }

      public function updateImages(Request $request)
      {
          Log::info('updateImages called with request: ', $request->all());
          Log::info('Files in request: ', $request->files->all());

          $validated = $request->validate([
              'main_background_image' => 'image|max:2048', // Max 2MB
              'gallery_image_1' => 'image|max:2048',
              'gallery_image_2' => 'image|max:2048',
              'header_logo' => 'image|max:2048',
          ], [
              'main_background_image.image' => 'The main background must be an image.',
              'main_background_image.max' => 'The main background image must not exceed 2MB.',
          ]);

          $imageTypes = [
              'main_background_image' => 'main_background',
              'gallery_image_1' => 'gallery_1',
              'gallery_image_2' => 'gallery_2',
              'header_logo' => 'header_logo',
          ];

          $updated = false;
          foreach ($imageTypes as $inputName => $type) {
              if ($request->hasFile($inputName)) {
                  $file = $request->file($inputName);
                  Log::info("Uploading file for type: $type, file name: " . $file->getClientOriginalName() . ", size: " . $file->getSize() . " bytes");
                  $directory = storage_path('app/public/images');
                  if (!file_exists($directory)) {
                      mkdir($directory, 0755, true);
                      Log::info("Created directory: $directory");
                  }
                  $path = $file->store('images', 'public');
                  if ($path) {
                      Log::info("Stored file path: $path");
                      Image::updateOrCreate(
                          ['type' => $type],
                          ['path' => $path]
                      );
                      Log::info("Image record updated/created for type: $type with path: $path");
                      $updated = true;
                  } else {
                      Log::error("Failed to store file for type: $type, error: " . Storage::disk('public')->getDriver()->getAdapter()->getPathPrefix());
                  }
              } else {
                  Log::info("No file uploaded for type: $type");
              }
          }

          if ($updated) {
              return redirect()->back()->with('message', 'Images updated successfully!');
          } else {
              return redirect()->back()->with('message', 'No images were uploaded or upload failed.');
          }
      }

      public function destroy($id)
      {
          SolarPanel::findOrFail($id)->delete();
          return redirect()->back()->with('message', 'Solar panel deleted successfully.');
      }
  }
