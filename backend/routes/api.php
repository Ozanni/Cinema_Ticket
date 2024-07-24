<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MovieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
// Route::middleware('auth:sanctum')->group()
Route::post('/createMovie', [MovieController::class, 'create']);
Route::get('/getMovie', [MovieController::class, 'index']);
Route::put('/updateMovie/{id}', [MovieController::class, 'update']);
Route::delete('/deleteMovie/{id}', [MovieController::class, 'delete']);
