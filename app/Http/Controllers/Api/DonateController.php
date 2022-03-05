<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Donate;
use App\Models\DonorRating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class DonateController extends Controller
{
    public function accept()
    {
        $validator = Validator::make(request()->all(), [
            'blood_request_id' => 'required',
            'status' => 'required|'.Rule::in(['committed'])
        ]);

        if($validator->fails()){
            return validateError($validator->errors());
        }

        try{
            $donate = Donate::create([
                'blood_request_id' => request('blood_request_id'),
                'user_id' => auth()->id(),
                'status' => request('status')
            ]);

            return response([
                'status' => 'success',
                'statusCode' => 201,
                'message' => 'You commit to donate successfully',
                            ], 201);
        }catch (\Exception $e){
            return serverError($e);
        }
    }

    public function update($id)
    {
        $validator = Validator::make(request()->all(), [
            'status' => 'required|'.Rule::in(['received', 'rejected'])
        ]);

        if($validator->fails()){
            return validateError($validator->errors());
        }

        try{
            if(request('status') === 'received' && !request()->has('rating')){
                return validateError([
                    'rating' => [
                        'Rating is required'
                    ]
                ]);
            }

            $donate = Donate::where('id', $id)->whereHas('blood_request', function($item){
                $item->where('user_id', auth()->id());
            })->first();

            if($donate){
                $donate->status = request('status');
                $donate->update();

                if($donate->status === 'received'){
                    DonorRating::create([
                        'user_id' => $donate->user_id,
                        'rating' => request('rating'),
                        'description' => request('description')
                    ]);
                }

                return response([
                    'status' => 'success',
                    'statusCode' => 200,
                    'message' => 'Donate process completed'
                ], 200);
            }else{
                return itemNotFound('You have no access to update');
            }
        }catch (\Exception $e){
            return serverError($e);
        }
    }

    public function show($id)
    {
        try{
            $donate = Donate::with(['user', 'blood_request'])->where('id', $id)->whereHas('blood_request', function($item){
                $item->where('user_id', auth()->id());
            })->first();

            if($donate){
                return response([
                    'status' => 'success',
                    'statusCode' => 200,
                    'data' => $donate
                ], 200);
            }else{
                return itemNotFound('You have no access to update or item not found');
            }
        }catch (\Exception $e){
            return serverError($e);
        }
    }
}
