<?php

  use Illuminate\Support\Facades\Route;
  use App\Http\Controllers\Api\SolarController;
  use App\Http\Controllers\PaymentController;
  use App\Http\Controllers\ImageController;

  Route::apiResource('/solar-panels', SolarController::class);
  Route::get('/csrf-token', function () { return response()->json(['csrf_token' => csrf_token()]); });
  Route::post('/place-order', [PaymentController::class, 'placeOrder'])->name('api.place-order');
  Route::get('/images/{type}', [App\Http\Controllers\ImageController::class, 'show']);

  
    // use Illuminate\Support\Facades\Route;
    // use App\Http\Controllers\Api\SolarController;
    // use App\Http\Controllers\PaymentController;
    // use App\Http\Controllers\ImageController;


    // Route::apiResource('/solar-panels', SolarController::class);
    // Route::get('/csrf-token', function () { return response()->json(['csrf_token' => csrf_token()]); });
    // Route::post('/place-order', [PaymentController::class, 'placeOrder'])->name('api.place-order');
    // Route::get('/images/{type}', [App\Http\Controllers\ImageController::class, 'show']);







