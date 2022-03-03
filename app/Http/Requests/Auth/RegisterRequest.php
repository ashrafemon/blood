<?php

namespace App\Http\Requests\Auth;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'     => 'required|min: 3',
            'email'    => 'email|unique:users',
            'phone'    => 'required|regex:/(01[3-9]\d{8})$/|unique:users',
            'password' => 'required|min:6|confirmed',
            'role'     => Rule::in(['SUPER_ADMIN', 'ADMIN', 'USER']),
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        if ($this->expectsJson()) {
            $errors = (new ValidationException($validator))->errors();
            throw new HttpResponseException(validateError($errors));
        }

        parent::failedValidation($validator);
    }
}
