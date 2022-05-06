<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function homePage() {
        return view('index');
    }

    public function soundPlayerPage(Request $request) {
        return view('sound_player')->with('fileLink', $request->input('fileLink'));
    }
}
