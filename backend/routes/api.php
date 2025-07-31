<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BlogController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');
    Route::post('/register',[AuthController::class,'register']);
    Route::post('/login',[AuthController::class,'login']);
Route::middleware('auth:api')->group(function () {
    Route::apiResource('/users',AuthController::class);
    Route::get('/blogs',[BlogController::class,'index']);
});
