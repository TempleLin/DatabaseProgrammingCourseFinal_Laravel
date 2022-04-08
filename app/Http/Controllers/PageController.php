<?php

namespace App\Http\Controllers;

class PageController extends Controller
{
    public function homePage() {
        return view('index');
    }
}
