<?php

namespace App\Http\Controllers;

use App\Models\Show;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ShowController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'movie_id' => 'required|integer',
            'theaters_id' => 'required|integer',
            'time' => 'required|date_format:H:i',
            'day' => 'required|date',
            'price' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Validation Error',
                'messages' => $validator->errors()
            ], 422);
        };

        // $show_duplicate = Show::where('movie_id', $request->movie_id)
        //                     ->where('theaters_id', $request->theaters_id)
        //                     ->where('time', $request->time)
        //                     ->where('day', $request->day)
        //                     ->first();

        // if ($show_duplicate) {
        //     return response()->json([
        //         'duplicate' => 'show existed'
        //     ], 409);
        // };

        try {
            $show = Show::create($request->all());
            return response()->json([
                'success' => 'Create show success',
                'show' => $show,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Could not create show',
                'messages' => $e->getMessage()
            ], 500);
        };
    }

    public function getAll() {
        $allShows = Show::all();
        return response()->json($allShows, 200);
    }

    public function getShowByMovieID($movieID) {
        $shows = Show::where('movie_id', $movieID)->get();
        if ($shows->isEmpty()) {
            return response()->json(['message' => 'Not found'], 404);
        }
        return response()->json($shows, 200);
    }

    public function getShowByDay(Request $request) {
        $shows = Show::where('movie_id', $request->movieID)->where('day', $request->day)->get();
        // if ($shows->isEmpty()) {
        //     return response()->json(['message' => 'Not found'], 404);
        // }
        return response()->json($shows, 200);
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'movie_id' => 'required|integer',
            'theaters_id' => 'required|integer',
            'time' => 'required|date_format:H:i',
            'day' => 'required|date',
            'price' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Validation Error',
                'messages' => $validator->errors()
            ], 422);
        };

        $show = Show::find($id);
        if(!$show) {
            return response()->json([
                'error' => 'Show not found'
            ], 404);
        }

        // unique_show (không được trùng đồng thời các trường dưới đây )
        // $duplicate = Show::where('show_id', '!=', $id)
        //                 -> where('movie_id', $request->movie_id)
        //                 ->where('theaters_id', $request->theaters_id)
        //                 ->where('time', $request->time)
        //                 ->where('day', $request->day)
        //                 ->first();
        // if ($duplicate) {
        //     return response()->json([
        //         'duplicate' => 'show existed'
        //     ], 409);
        // }

        try {
            $show->update($request->all());
            return response()->json([
                'success' => 'Update show success',
                'show' => $show,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Could not update show',
                'messages' => $e->getMessage()
            ], 500);
        };
    }

    public function delete($id) {
        $show = Show::find($id);

        if (!$show) {
            return response()->json(['error'=> 'Show not found', 404]);
        }

        try {
            $show->delete();
            return response()->json(['message' => 'Show deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Could not delete show',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
