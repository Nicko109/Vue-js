<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('people')->group(function () {
Route::post('/', [\App\Http\Controllers\Person\StoreController::class, '__invoke']);
Route::get('/', [\App\Http\Controllers\Person\IndexController::class, '__invoke']);
Route::get('/{person}', [\App\Http\Controllers\Person\ShowController::class, '__invoke']);
Route::patch('/{person}', [\App\Http\Controllers\Person\UpdateController::class, '__invoke']);
Route::delete('/{person}', [\App\Http\Controllers\Person\DeleteController::class, '__invoke']);
});

