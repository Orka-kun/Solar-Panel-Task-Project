<!DOCTYPE html>
  <html>
  <head>
      <title>Admin Dashboard</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body>
      <div class="container mx-auto p-4">
          <h1 class="text-2xl font-bold mb-4">Admin Dashboard</h1>
          @if (session('message'))
              <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {{ session('message') }}
              </div>
          @endif

          <!-- Form for Adding Panels -->
          <form action="{{ route('admin.dashboard.store') }}" method="POST" enctype="multipart/form-data">
              @csrf
              <input type="number" name="quantity" placeholder="Quantity" class="border p-2 mb-2 w-full" required>
              <input type="number" step="0.01" name="amount" placeholder="Amount" class="border p-2 mb-2 w-full" required>
              <button type="submit" class="bg-blue-500 text-white p-2">Add Panel</button>
          </form>

          <!-- Form for Updating Images -->
          <form action="{{ route('admin.dashboard.update-images') }}" method="POST" enctype="multipart/form-data" class="mt-4">
              @csrf
              <!-- Image Upload Fields -->
              <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Main Background Image</label>
                  <input type="file" name="main_background_image" class="border p-2 w-full" accept="image/*">
              </div>
              <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Gallery Image 1</label>
                  <input type="file" name="gallery_image_1" class="border p-2 w-full" accept="image/*">
              </div>
              <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Gallery Image 2</label>
                  <input type="file" name="gallery_image_2" class="border p-2 w-full" accept="image/*">
              </div>
              <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Header Logo</label>
                  <input type="file" name="header_logo" class="border p-2 w-full" accept="image/*">
              </div>
              <button type="submit" class="bg-green-500 text-white p-2">Update Images</button>
          </form>

          <ul class="mt-4">
              @foreach($solarPanels as $panel)
                  <li class="mb-2">{{ $panel->quantity }} Panels - ${{ $panel->amount }}
                      <form action="{{ route('admin.dashboard.destroy', $panel->id) }}" method="POST" style="display:inline">
                          @csrf
                          @method('DELETE')
                          <button type="submit" class="bg-red-500 text-white p-1" onclick="return confirm('Are you sure?')">Delete</button>
                      </form>
                  </li>
              @endforeach
          </ul>
      </div>
  </body>
  </html>
