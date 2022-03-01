<?php

namespace App\Models;

use App\Models\Location\Area;
use App\Models\Location\District;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodRequest extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'accepted_date' => 'datetime',
    ];

    protected $appends = ['formatted_acceptable_date'];

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

//    public function hospital()
//    {
//        return $this->belongsTo(Hospital::class);
//    }

    public function getFormattedAcceptableDateAttribute()
    {
        return Carbon::parse($this->accepted_date)->format('H:i A, d M Y');
    }
}
