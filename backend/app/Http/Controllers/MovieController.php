<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MovieController extends Controller
{
    public function getAll() {
        $movies = DB::table('movies')->get();
        return response()->json($movies, 200);
    }

    public function get($id) {
        $movies = DB::table('movies')->where('movie_id', '=', $id)->first();
        if ($movies) {
            return response()->json($movies, 200);
        } else {
            return response()->json(['false' => 'Movie not found'], 404);
        }

    }

    public function create(Request $request) {
        // Xác thực dữ liệu
        $validator = Validator::make($request->all(), [
            'movie_name' => 'required|string|max:255',
            'description' => 'required|string',
            'director' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'classification' => 'required|string|max:255',
            'duration' => 'required|integer',
            'image' => 'required|string',
            'link_trailer' => 'required|string|max:255',
            'premiere' => 'required|date'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Validation Error',
                'messages' => $validator->errors()
            ], 422);
        }

        try {
            DB::table('movies')->insert($request->all());

            return response()->json([
                'success' => 'Create movie success'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Database Error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function update(Request $request, $id) {
        $movie = Movie::where('movie_id', $id);
        try {
            $movie->update($request->all());
            return response()->json([
                'success' => 'Update movie success',
                'movie' => $movie,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Could not update movie',
                'messages' => $e->getMessage()
            ], 500);
        };
    }

    public function delete($id) {
        $movie = Movie::findOrFail($id);
        try {
            $movie->delete();
            return response()->json([
                'success' => 'Delete movie success',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Could not delete movie',
                'messages' => $e->getMessage()
            ], 500);
        };
    }
}
