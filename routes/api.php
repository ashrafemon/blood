 <?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function(){
    Route::prefix('auth')->group(function(){
        Route::post('login', [\App\Http\Controllers\Api\Auth\LoginController::class, 'login']);
        Route::post('register', [\App\Http\Controllers\Api\Auth\RegisterController::class, 'register']);

        Route::post('reset-request', [\App\Http\Controllers\Api\Auth\ResetController::class, 'resetRequest']);
        Route::post('reset-otp-verify', [\App\Http\Controllers\Api\Auth\ResetController::class, 'verifyResetOtp']);
        Route::post('reset-resend-otp', [\App\Http\Controllers\Api\Auth\ResetController::class, 'resendResetOtpCode']);
        Route::post('reset-new-password', [\App\Http\Controllers\Api\Auth\ResetController::class, 'newPassword']);

        Route::middleware('auth:sanctum')->group(function (){
            Route::get('/logout', [\App\Http\Controllers\Api\Auth\LoginController::class, 'logout']);
            Route::get('/me', [\App\Http\Controllers\Api\Auth\LoginController::class, 'me']);
            Route::patch('/update', [\App\Http\Controllers\Api\Auth\RegisterController::class, 'update']);
        });
    });

    Route::apiResource('/donors', \App\Http\Controllers\Api\DonorController::class)->only(['index', 'show']);
    Route::post('/search-donors', [\App\Http\Controllers\Api\DonorController::class, 'searchDonor']);

    Route::apiResource('/blood-requests', \App\Http\Controllers\Api\BloodRequestController::class)->only(['index', 'store', 'show']);
    Route::post('/filter-blood-requests', [\App\Http\Controllers\Api\BloodRequestController::class, 'filterSeekerRequest']);
    Route::get('/my-blood-requests', [\App\Http\Controllers\Api\BloodRequestController::class, 'authUserBloodRequests'])->middleware('auth:sanctum');

    Route::post('/file-uploader', [\App\Http\Controllers\Api\HelperController::class, 'fileUploader']);

    Route::middleware('auth:sanctum')->group(function (){
        Route::post('commit-donate', [\App\Http\Controllers\Api\DonateController::class, 'accept']);
        Route::patch('donate-update/{id}', [\App\Http\Controllers\Api\DonateController::class, 'update']);
        Route::get('show-donate/{id}', [\App\Http\Controllers\Api\DonateController::class, 'show']);
    });

    Route::prefix('site')->group(function (){
        Route::get('/districts', [\App\Http\Controllers\Api\SiteController::class, 'districts']);
        Route::get('/areas', [\App\Http\Controllers\Api\SiteController::class, 'areas']);
        Route::get('/areas-by-district/{district_id}', [\App\Http\Controllers\Api\SiteController::class, 'areasByDistrict']);
        Route::get('/hospitals', [\App\Http\Controllers\Api\SiteController::class, 'hospitals']);
    });
});
