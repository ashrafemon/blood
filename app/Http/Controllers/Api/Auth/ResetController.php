<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\OtpCode;
use App\Models\PasswordReset;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ResetController extends Controller
{
    public function resetRequest()
    {
        $validator = Validator::make(request()->only(['phone']), [
            'phone' => 'required|exists:users|regex:/(01[3-9]\d{8})$/'
        ]);

        if ($validator->fails()) {
            return validateError($validator->errors());
        }

        try {
            $resetRequest = PasswordReset::create([
                'phone' => request('phone'),
                'status' => 'pending'
            ]);

            if ($resetRequest) {
                //            $existOtpCodes = OtpCode::where('type', 'reset')->where('phone', request('phone'))->get();
                //            $existOtpCodes->each(function($item){
                //                $item->delete();
                //            });

                $otpCode = OtpCode::create([
                    'phone' => request('phone'),
                    'type' => 'reset',
                    'code' => (string)mt_rand(100000, 999999),
                    'validate_till' => now()->addHour()
                ]);

                return response([
                    'status' => 'success',
                    'statusCode' => 201,
                    'message' => 'An otp send your phone',
                    'data' => [
                        'phone' => request('phone'),
                        'code' => $otpCode->code,
                        'validate_till' => $otpCode->validate_till
                    ]
                ], 201);
            }
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function verifyResetOtp()
    {
        $validator = Validator::make(request()->only(['phone', 'code']), [
            'phone' => 'required|exists:users|regex:/(01[3-9]\d{8})$/',
            'code' => 'required|min:6|max:6'
        ]);

        if($validator->fails()){
            return validateError($validator->errors());
        }

        try{
            $existResetRequest = PasswordReset::where('phone', request('phone'))
                ->where('status', 'pending')
                ->latest()
                ->first();

            if($existResetRequest){
                $existOtpCode = OtpCode::where('type', 'reset')
                    ->where('phone', request('phone'))
                    ->where('code', request('code'))
//                    ->where('validate_till', '>', now())
                    ->first();



                if($existOtpCode){
                    $existResetRequest->status = 'completed';
                    $existResetRequest->update();

                    $existOtpCode->delete();

                    return response([
                        'status' => 'success',
                        'statusCode' => 200,
                        'message' => 'Otp matched. Please set new password',
                        'data' => [
                            'phone' => request('phone')
                        ]
                    ], 200);
                }
            }

        }catch (Exception $e){
            return serverError($e);
        }
    }

    public function resendResetOtpCode()
    {
        $validator = Validator::make(request()->only(['phone']), [
            'phone' => 'required|exists:users|regex:/(01[3-9]\d{8})$/'
        ]);

        if ($validator->fails()) {
            return validateError($validator->errors());
        }

        try {
            $existResetRequest = PasswordReset::where('phone', request('phone'))->where('status', 'pending')->latest()->first();

            if ($existResetRequest) {
                $existOtpCodes = OtpCode::where('phone', request('phone'))->get();
                $existOtpCodes->each(function ($item){
                    $item->delete();
                });

                $otpCode = OtpCode::create([
                    'phone' => request('phone'),
                    'code' => (string)mt_rand(100000, 999999),
                    'validate_till' => now()->addHour()
                ]);

                return response([
                    'status' => 'success',
                    'statusCode' => 201,
                    'message' => 'An otp send your phone',
                    'data' => [
                        'phone' => request('phone'),
                        'code' => $otpCode->code,
                        'validate_till' => $otpCode->validate_till
                    ]
                ], 201);
            }
        } catch (Exception $e) {
            return serverError($e);
        }
    }


    public function newPassword()
    {
        $validator = Validator::make(request()->only(['phone', 'password', 'password_confirmation']), [
            'phone' => 'required|exists:users|regex:/(01[3-9]\d{8})$/',
            'password' => 'required|min: 6|confirmed',
        ]);

        if($validator->fails()){
            return validateError($validator->errors());
        }

        try{
            $existResetRequest = PasswordReset::where('phone', request('phone'))->where('status', 'completed')->first();

            if($existResetRequest){
                $user = User::where('phone', request('phone'))->first();
                $user->password = Hash::make(request('password'));
                $user->update();

                $existResetRequest->status = 'changed';
                $existResetRequest->update();

                return response([
                    'status' => 'success',
                    'statusCode' => 200,
                    'message' => 'You have successfully reset your password!'
                ], 200);
            }
        }catch (Exception $e){
            return serverError($e);
        }
    }
}
