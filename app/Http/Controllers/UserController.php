<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function login(Request $request) {
        error_log('LOGIN START');

        if ($request->session()->get('loggedIn') !== null) {
            return 'ALREADY_LOGGED_IN';
        }

        $inputs = $request->all();
        $encryptedPassword = md5($inputs['loginUsername'] . $inputs['loginPassword']);
        error_log('login encrypting password');
        $checkGetUser = DB::table('users')
            ->where('username', $inputs['loginUsername'])
//            ->where('password', $inputs['$encryptedPassword']) //TODO: Replace bottom one with this, once register feature is implemented.
            ->where('password', $inputs['loginPassword'])
            ->first();
        error_log('login check user');
        if ($checkGetUser) {
            $request->session()->put('loggedIn', true);
            error_log('LOGIN SUCCESS');
            return 'LOGIN_SUCCESS';
        }
        error_log('login failed');
        return 'LOGIN_FAILED';
    }

    public function register(Request $request) {
        $inputs = $request->all();
        if ($inputs['loginUsername'] === null || $inputs['loginPassword'] === null) {
            return 'INPUT_HAS_NULL';
        }
        $checkGetUser = DB::table('users')->where('username', $inputs['loginUsername'])->first();
        if ($checkGetUser) {
            return 'USER_ALREADY_EXISTS';
        }
        $encryptedPassword = md5($inputs['loginUsername'] . $inputs['loginPassword']); //Encrypt password with md5.
        DB::table('users')->insert(['username' => $inputs['loginUsername'], 'password' => $encryptedPassword]);
        return 'USER_REGISTER_SUCCESS';
    }
}
