<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BloodSeekerRequest;
use App\Models\BloodRequest;
use Exception;

class BloodRequestController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'], ['only' => ['store']]);
    }

    public function index()
    {
        try {
            $bloodRequests = BloodRequest::with(['user.profile', 'hospital', 'district', 'area'])->where('status', 'active')->paginate(12);

            return response([
                'status' => 'success',
                'statusCode' => 200,
                'data' => $bloodRequests
            ], 200);
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function store(BloodSeekerRequest $request)
    {
        try {
            $bloodRequest = BloodRequest::create([
                'user_id' => auth()->id(),
                'district_id' => $request->district_id,
                'area_id' => $request->area_id,
                'hospital' => $request->hospital,
                'blood_group' => $request->blood_group,
                'emergency' => $request->emergency ?? 'false',
                'accepted_date' => $request->accepted_date,
                'gender' => $request->gender,
                'religion' => $request->religion,
                'description' => $request->description,
                'status' => $request->status ?? 'active',
            ]);

            return response([
                'status' => 'success',
                'statusCode' => 201,
                'message' => 'Your request for blood has been posted',
                'data' => $bloodRequest->load(['user.profile', 'hospital', 'district', 'area'])
            ], 201);
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function show($id)
    {
        try {
            $bloodRequest = BloodRequest::with(['user.profile', 'hospital', 'district', 'area'])
                ->where('id', $id)
                ->where('status', 'active')
                ->first();

            if ($bloodRequest) {
                return response([
                    'status' => 'success',
                    'statusCode' => 200,
                    'data' => $bloodRequest
                ], 200);
            } else {
                return itemNotFound();
            }
        } catch (Exception $e) {
            return serverError($e);
        }
    }
}
