<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            $user = User::where('phone', $request->phone)->first();

            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    $accessToken = $user->createToken('authToken')->plainTextToken;

                    return response([
                        'status' => 'success',
                        'statusCode' => 200,
                        'data' => [
                            'token' => 'Bearer ' . $accessToken,
                            'data' => $user
                        ]
                    ], 200);
                } else {
                    return itemNotFound('Credentials not matched');
                }
            } else {
                return itemNotFound('User not found');
            }
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function me()
    {
        try {
            return response([
                'status' => 'success',
                'statusCode' => 200,
                'data' => auth()->user()
            ], 200);
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function logout()
    {
        try {
            auth()->user()->tokens->delete();

            return response([
                'status' => 'success',
                'statusCode' => 200,
                'message' => 'Successfully logout...'
            ], 200);
        } catch (Exception $e) {
            return serverError($e);
        }
    }
}
