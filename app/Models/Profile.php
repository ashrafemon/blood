<?php

namespace App\Models;

use App\Models\Location\Area;
use App\Models\Location\District;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'available_donate_schedule' => 'array',
        'dob' => 'datetime',
        'phone_publicly' => 'boolean',
        'available_donate' => 'boolean',
        'emergency_donate' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function district()
    {
        return $this->belongsTo(District::class);
    }

    public function area()
    {
        return $this->belongsTo(Area::class);
    }
}
