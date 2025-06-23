<?php

  namespace App\Http\Controllers;

  use Illuminate\Http\Request;
  use App\Models\Image;

  class ImageController extends Controller
  {
      public function show($type)
      {
          $image = Image::where('type', $type)->first();
          return response()->json(['path' => $image ? $image->path : null]);
      }
  }
