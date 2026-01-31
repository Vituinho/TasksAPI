<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Tasks extends Model
{
    use HasApiTokens;

    protected $fillable = [
        'title',
        'description',
        'status',
    ];
}
