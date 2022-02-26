<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
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
                'gender' => $request->gender,
                'role' => $request->role ?? 'USER',
                'dob' => $request->dob,
                'status' => $request->status ?? 'active',
            ]);

            return response([
                'status' => 'success',
                'statusCode' => 201,
                'message' => 'Successfully register...',
                'data' => $user
            ]);
        } catch (Exception $e) {
            return serverError($e);
        }
    }
}
