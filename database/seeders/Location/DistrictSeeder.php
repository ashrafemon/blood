<?php

namespace Database\Seeders\Location;

use App\Models\Location\District;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        District::truncate();
        District::factory()->count(64)->create();
    }
}
