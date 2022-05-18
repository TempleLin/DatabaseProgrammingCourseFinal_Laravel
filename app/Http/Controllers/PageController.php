<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function homePage(Request $request) {
        return view('index')->with('loggedIn', $request->session()->has('loggedIn'));
    }

    public function soundPlayerPage(Request $request) {
        return view('sound_player')->with('fileLink', $request->input('fileLink'));
    }
}
