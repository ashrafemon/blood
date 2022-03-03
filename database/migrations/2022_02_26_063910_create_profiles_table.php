<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id');
            $table->enum('blood_group', ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])->nullable();
            $table->enum('gender', ['Male', 'Female', 'Other'])->nullable();
            $table->enum('religion', ['Muslims', 'Hindus', 'Buddhists', 'Christians', 'Others'])->nullable();
            $table->date('dob')->nullable();
            $table->unsignedInteger('district_id')->nullable();
            $table->unsignedInteger('area_id')->nullable();
            $table->string('address')->nullable();
            $table->string('avatar')->nullable();

            $table->boolean('phone_publicly')->default(false);
            $table->boolean('available_donate')->default(false);
            $table->boolean('emergency_donate')->default(false);
            $table->json('available_donate_schedule')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
};
