<?php

  use Illuminate\Support\Facades\Route;
  use App\Http\Controllers\AdminController;

  Route::get('/', function () { return redirect('/admin/dashboard'); })->name('home');
  Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
  Route::post('/admin/dashboard', [AdminController::class, 'store'])->name('admin.dashboard.store');
  Route::post('/admin/dashboard/update-images', [AdminController::class, 'updateImages'])->name('admin.dashboard.update-images');
  Route::delete('/admin/dashboard/{id}', [AdminController::class, 'destroy'])->name('admin.dashboard.destroy');

// use Illuminate\Support\Facades\Route;
//        use App\Http\Controllers\AdminController;

//        Route::get('/', function () { return redirect('/admin/dashboard'); })->name('home');
//        Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
//        Route::post('/admin/dashboard', [AdminController::class, 'store'])->name('admin.dashboard.store');
//        Route::delete('/admin/dashboard/{id}', [AdminController::class, 'destroy'])->name('admin.dashboard.destroy');

