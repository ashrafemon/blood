<?php

namespace Database\Seeders;

use Database\Seeders\Location\AreaSeeder;
use Database\Seeders\Location\DistrictSeeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            DistrictSeeder::class,
            AreaSeeder::class,
            HospitalSeeder::class
        ]);
    }
}
