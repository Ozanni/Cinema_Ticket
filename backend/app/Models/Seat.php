<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    protected $table = 'seats';
    protected $primaryKey = 'seat_id';

    public $timestamps = false;
    protected $fillable = [
        'seat_name',
        'show_id',
        'status',
    ];

    public function show() {
        return $this->belongsTo(Show::class, 'show_id');
    }
}
