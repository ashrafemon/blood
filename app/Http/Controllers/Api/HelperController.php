<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class HelperController extends Controller
{
    public function fileUploader()
    {
        $validator = Validator::make(request()->only('file'), [
            'file' => 'required',
        ]);

        if ($validator->fails()) {
            return validateError($validator->errors());
        }

        try {
            if (request()->has('file')) {
                $file = request()->file('file');

                $mimeType = $file->getClientMimeType();
                $folder = 'blood_bank/files';

                if (str_contains($mimeType, 'image')) {
                    $folder = 'blood_bank/images';
                } elseif (str_contains($mimeType, 'video')) {
                    $folder = 'blood_bank/videos';
                }

                $path = $file->store($folder, 's3');

                return response([
                    'status' => 'success',
                    'statusCode' => 201,
                    'message' => 'File uploaded successfully',
                    'data' => Storage::disk('s3')->url($path),
                ], 201);
            }
        } catch (Exception $e) {
            return serverError($e);
        }
    }

}
