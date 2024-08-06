<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    protected $table = 'movies';

    protected $primaryKey = 'movie_id';
    public $timestamps = false;
    protected $fillable = [
        'movie_name',
        'description',
        'director',
        'category',
        'classification',
        'duration',
        'image',
        'link_trailer',
        'premiere',
    ];
}
