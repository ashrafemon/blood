<?php

namespace Database\Factories\Location;

use App\Models\Location\District;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location\Area>
 */
class AreaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $districts = District::take(20)->get()->toArray();

        return [
            'district_id' => $districts[array_rand($districts)]['id'],
            'name' => $this->faker->word,
            'image'  => 'https://www.gravatar.com/avatar/HASH',
            'status' => 'active'
        ];
    }
}
