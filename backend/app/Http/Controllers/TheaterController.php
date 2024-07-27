<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class TheaterController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'theaterName' => 'required|string|max:255',
            'location' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Validation Error',
                'messages' => $validator->errors()
            ], 422);
        };

        try {
            DB::table('theaters')->insert([
                'theater_name' => $request->theaterName,
                'location' => $request->location,
            ]);
            return response()->json([
                'success' => 'Create theater success'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Database error',
                'messages' => $e->getMessage()
            ], 500);
        };
    }
}
