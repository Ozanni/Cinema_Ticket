<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SeatController extends Controller
{
    public function getSeatByShowId($showID) {
        $seats = DB::table('seats')->where('show_id', $showID)->get();
        return response()->json($seats, 200);
    }

    public function updateStatus(Request $request) {
        try {
            Seat::whereIn('seat_id', $request->seatIDs)->update(['status' => $request->status]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json(['success' => 'Seat status updated successfully.'], 200);
    }

}
