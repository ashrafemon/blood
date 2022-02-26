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
        Schema::create('blood_requests', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('district_id');
            $table->unsignedInteger('area_id')->nullable();
            $table->unsignedInteger('hospital_id')->nullable();
            $table->enum('blood_group', ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])->nullable();
            $table->enum('emergency', ['true', 'false'])->default('false');
            $table->date('accepted_date')->nullable();
            $table->enum('gender', ['Male', 'Female', 'Other'])->nullable();
            $table->enum('religion', ['Muslims', 'Hindus', 'Buddhists', 'Christians', 'Others'])->nullable();
            $table->longText('description')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
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
        Schema::dropIfExists('blood_requests');
    }
};
