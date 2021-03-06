<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class DonorController extends Controller
{
    public function index()
    {
        try {
            $donors = User::with(['profile'])->where('role', User::ROLES['user'])->whereHas('profile', function ($item) {
                $item->where('available_donate', 'true');
            })->paginate(12);

            return response([
                'status' => 'success',
                'statusCode' => 200,
                'data' => $donors
            ], 200);
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function show($id)
    {
        try {
            $donor = User::with(['profile'])->where('id', $id)->where('role', User::ROLES['user'])->first();

            if ($donor) {
                return response([
                    'status' => 'success',
                    'statusCode' => 200,
                    'data' => $donor
                ], 200);
            } else {
                return itemNotFound('Donor not found');
            }
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function searchDonor()
    {
        $validator = Validator::make(request()->all(), [
            'district_id' => 'required',
            'gender' => Rule::in(['Male', 'Female', 'Other']),
            'blood_group' => 'required|' . Rule::in(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']),
            'religion' => Rule::in(['Muslims', 'Hindus', 'Buddhists', 'Christians', 'Others'])
        ]);

        if ($validator->fails()) {
            return validateError($validator->errors());
        }

        try {
            $donors = User::query();

            if (request()->has('district_id')) {
                $donors = $donors->whereHas('profile', function ($item) {
                    $item->where('district_id', request('district_id'));
                });
            }

            if (request()->has('area_id')) {
                $donors = $donors->whereHas('profile', function ($item) {
                    $item->where('area_id', request('area_id'));
                });
            }

            if (request()->has('gender')) {
                $donors = $donors->whereHas('profile', function ($item) {
                    $item->where('gender', request('gender'));
                });
            }

            if (request()->has('blood_group')) {
                $donors = $donors->whereHas('profile', function ($item) {
                    $item->where('blood_group', request('blood_group'));
                });
            }

            if (request()->has('religion')) {
                $donors = $donors->whereHas('profile', function ($item) {
                    $item->where('religion', request('religion'));
                });
            }

            if(request()->user('sanctum')){
                $donors = $donors->whereNot('id', request()->user('sanctum')['id']);
            }

            $donors = $donors->with(['profile'])->whereHas('profile', function ($item) {
                $item->where('available_donate', 'true');
            })->paginate(12);

            return response([
                'status' => 'success',
                'statusCode' => 200,
                'data' => $donors
            ]);

        } catch (Exception $e) {
            return serverError($e);
        }
    }
}
