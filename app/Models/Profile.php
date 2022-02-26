<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'available_donate_schedule' => 'array',
        'dob' => 'datetime'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
