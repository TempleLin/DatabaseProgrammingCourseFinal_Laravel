<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function login(Request $request) {
        error_log('LOGIN START');

        $inputs = $request->all();

        if ($request->session()->get('loggedIn') === $inputs['loginUsername']) {
            return 'ALREADY_LOGGED_IN';
        }

        $encryptedPassword = md5($inputs['loginUsername'] . $inputs['loginPassword']);
        error_log('login encrypting password');
        try {
            $checkGetUser = DB::table('users')
                ->where('username', $inputs['loginUsername'])
                ->where('password', $encryptedPassword)
                ->first();
        } catch (\Exception $exception) {
            error_log($exception->getMessage());
        }

        error_log('login check user');
        if ($checkGetUser) {
            $request->session()->put('loggedIn', $inputs['loginUsername']);
            error_log('LOGIN SUCCESS');
            return 'LOGIN_SUCCESS';
        }
        error_log('login failed');
        return 'LOGIN_FAILED';
    }

    public function register(Request $request) {
        $inputs = $request->all();
        if ($inputs['regUsername'] === null || $inputs['regPassword'] === null) {
            return 'INPUT_HAS_NULL';
        }
        error_log('register check has null');
        $checkGetUser = DB::table('users')->where('username', $inputs['regUsername'])->first();
        if ($checkGetUser) {
            return 'USER_ALREADY_EXISTS';
        }
        error_log('register check if user exists');
        $encryptedPassword = md5($inputs['regUsername'] . $inputs['regPassword']); //Encrypt password with md5.
        try {
            DB::table('users')->insert(['username' => $inputs['regUsername'], 'password' => $encryptedPassword, 'email' => $inputs['regEmail']]);
            error_log('register insert to database');
            return 'USER_REGISTER_SUCCESS';
        } catch (\Exception $exception) {
            error_log($exception->getMessage());
        }
    }
}
