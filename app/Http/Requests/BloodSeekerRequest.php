<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class BloodSeekerRequest extends FormRequest
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
            'district_id' => 'required',
            'gender'   => 'required|' . Rule::in(['Male', 'Female', 'Other']),
            'religion' => Rule::in(['Muslims', 'Hindus', 'Buddhists', 'Christians', 'Others']),
            'blood_group' => 'required|'. Rule::in(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']),
            'accepted_date' => 'required|date'
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
