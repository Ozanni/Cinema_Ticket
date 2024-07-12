<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => ['required','string','email','max:255','unique:users'],
            'password' => ['required','string','min:8'],
            'phone_number' => ['required','regex:/^[0-9]{10,15}$/'],
            'first_name' => ['required','string'],
            'last_name' => ['required','string'],
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => 'Registration successful',
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 200);
    }
    public function registerForAdmin(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => ['required','string','email','max:255','unique:users'],
            'password' => ['required','string','min:8'],
            'phone_number' => ['required','regex:/^[0-9]{10,15}$/'],
            'first_name' => ['required','string'],
            'last_name' => ['required','string'],
            'role' => ['required','string'],
        ]);

        if($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone_number' => $request->phone_number,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'role' => $request->role,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 200);
    }
    public function login(Request $request){
        $validate = Validator::make($request->all(), [
            'email' => ['required','string','email','max:255'],
            'password' => ['required','string', 'min:8'],
        ]);

        if($validate->fails()) {
            return response()->json(['error' => $validate->errors()], 400);
        }

        $user = User::where('email', $request->email)->firstOrFail();

        if (!$user) {
            return response()->json(['message' => 'Email or password wrong'], 404);
        };

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Email or password wrong 2'], 403);
        };

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer'
        ], 200);
    }

    // public function logout(Request $request) {
    //     $request->user()->token()->delete();
    //     return response()->json([
    //        'message' => 'Logged out successfully'
    //     ], 200);
    // }
}
