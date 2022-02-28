<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Profile;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password),
                'role' => $request->role ?? 'USER',
                'verify' => $request->verify ?? 'true',
                'status' => $request->status ?? 'active'
            ]);

            if($user){
                Profile::create([
                    'user_id' => $user->id,
                    'blood_group' => $request->blood_group,
                    'gender' => $request->gender,
                    'dob' => $request->dob,
                    'religion' => $request->religion,
                    'district_id' => $request->district_id,
                    'area_id' => $request->area_id,
                    'address' => $request->address,
                    'avatar' => $request->avatar,
                    'phone_publicly' => $request->phone_publicly ?? 'false',
                    'emergency_donate' => $request->emergency_donate ?? 'false',
                    'available_donate' => $request->available_donate ?? 'false',
                    'available_donate_schedule' => $request->available_donate_schedule,
                ]);

                return response([
                    'status' => 'success',
                    'statusCode' => 201,
                    'message' => 'Successfully register...',
                    'data' => $user->load(['profile'])
                ]);
            }


        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function update()
    {
        try{
            $user = auth()->user();

            $user->name = request('name') ?? $user->name;
            $user->status = request('status') ?? $user->status;

            $user->profile->blood_group = request('blood_group') ?? $user->profile->blood_group;
            $user->profile->gender = request('gender') ?? $user->profile->gender;
            $user->profile->religion = request('religion') ?? $user->profile->religion;
            $user->profile->dob = request('dob') ?? $user->profile->dob;
            $user->profile->district_id = request('district_id') ?? $user->profile->district_id;
            $user->profile->area_id = request('area_id') ?? $user->profile->area_id;
            $user->profile->address = request('address') ?? $user->profile->address;
            $user->profile->avatar = request('avatar') ?? $user->profile->avatar;
            $user->profile->phone_publicly = request('phone_publicly') ?? $user->profile->phone_publicly;
            $user->profile->available_donate = request('available_donate') ?? $user->profile->available_donate;
            $user->profile->available_donate_schedule = request('available_donate_schedule') ?? $user->profile->available_donate_schedule;
            $user->push();

            return response([
               'status' => 'success',
               'statusCode' => 200,
               'message' => 'User update successfully',
               'data' => $user->load(['profile'])
            ]);

        }catch (Exception $e){
            return serverError($e);
        }
    }
}
