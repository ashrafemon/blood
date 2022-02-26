<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hospital;
use App\Models\Location\Area;
use App\Models\Location\District;
use Exception;

class SiteController extends Controller
{
    public function districts()
    {
        try {
            $districts = District::where('status', 'active')->get();

            return response([
                'status' => 'success',
                'statusCode' => 200,
                'data' => $districts
            ], 200);
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function areas()
    {
        try {
            $areas = Area::where('status', 'active')->get();

            return response([
                'status' => 'success',
                'statusCode' => 200,
                'data' => $areas
            ], 200);
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function areasByDistrict($district_id)
    {
        try {
            $areas = Area::where('district_id', $district_id)->where('status', 'active')->get();

            return response([
                'status' => 'success',
                'statusCode' => 200,
                'data' => $areas
            ], 200);
        } catch (Exception $e) {
            return serverError($e);
        }
    }

    public function hospitals()
    {
        try {
            $hospitals = Hospital::where('status', 'active')->get();

            return response([
                'status' => 'success',
                'statusCode' => 200,
                'data' => $hospitals
            ], 200);
        } catch (Exception $e) {
            return serverError($e);
        }
    }

}
