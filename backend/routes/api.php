<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\SeatController;
use App\Http\Controllers\ShowController;
use App\Http\Controllers\TheaterController;
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

//Movie
Route::post('/createMovie', [MovieController::class, 'create']);
Route::get('/getMovie', [MovieController::class, 'getAll']);
Route::get('/getMovie/{id}', [MovieController::class, 'get']);
Route::put('/updateMovie/{id}', [MovieController::class, 'update']);
Route::delete('/deleteMovie/{id}', [MovieController::class, 'delete']);

// Theater
Route::post('/createTheater', [TheaterController::class, 'create']);
Route::get('/theater/get/{id}', [TheaterController::class, 'getById']);
Route::get('/theater/getAll', [TheaterController::class, 'getAll']);

// Show
Route::post('/createShow', [ShowController::class, 'create']);
Route::get('/getAllShow', [ShowController::class, 'getAll']);
Route::get('/getShows/{movieID}', [ShowController::class, 'getShowByMovieID']);
Route::get('/show/getByDay', [ShowController::class, 'getShowByDay']);
Route::put('/show/update/{id}', [ShowController::class, 'update']);
Route::delete('/deleteShow/{id}', [ShowController::class, 'delete']);

//Seat
Route::get('/seats/{showID}', [SeatController::class, 'getSeatByShowId']);
Route::post('/seats/update', [SeatController::class, 'updateStatus']);
