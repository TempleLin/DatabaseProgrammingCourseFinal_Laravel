<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/**
 * Note:
 *  Sometimes route might have cache causing errors, need to type: "php artisan route:clear" in terminal.
 */

Route::get('/', [PageController::class, 'homePage']);

Route::get('/uploading', [PageController::class, 'uploadPage']);
