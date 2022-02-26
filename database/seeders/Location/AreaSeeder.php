<?php

namespace Database\Seeders\Location;

use App\Models\Location\Area;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Area::truncate();
        Area::factory()->count(200)->create();
    }
}
