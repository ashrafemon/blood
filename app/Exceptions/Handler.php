<?php

    namespace App\Exceptions;

    use Illuminate\Auth\AuthenticationException;
    use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
    use Illuminate\Http\Exceptions\ThrottleRequestsException;
    use Throwable;

    class Handler extends ExceptionHandler
    {
        /**
         * A list of the exception types that are not reported.
         *
         * @var array
         */
        protected $dontReport = [
            //
        ];

        /**
         * A list of the inputs that are never flashed for validation exceptions.
         *
         * @var array
         */
        protected $dontFlash = [
            'current_password',
            'password',
            'password_confirmation',
        ];

        /**
         * Register the exception handling callbacks for the application.
         *
         * @return void
         */
        public function register()
        {
            $this->reportable(function (Throwable $e) {
                //
            });
        }

        protected function unauthenticated($request, AuthenticationException $exception)
        {
            return $request->expectsJson()
                ? response()->json([
                                       'status' => 'error',
                                       'statusCode' => 401,
                                       'message' => 'Unauthenticated.'
                                   ], 401)
                : true;
        }

        public function render($request, Throwable $e)
        {
            if ($e instanceof ThrottleRequestsException && $request->wantsJson()) {
                return response()->json([
                    'status' => 'server_error',
                    'statusCode' => 500,
                    'message' => 'Too many attempts, please slow down the request.',
                ],500);
            }

            return parent::render($request, $e);
        }
    }
