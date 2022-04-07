<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/**
 * Note:
 *  Sometimes route might have cache causing errors, need to type: "php artisan route:clear" in terminal.
 *
 * TODO:
 *  1.  Through the use of setState to set parent component's state, can update other components in same hierarchy without changing the page.
 *     Redesigning the page to only switching components instead of changing page is required.
 *      Link to set parent's state: https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs
 *      Link to updating/switching components: https://stackoverflow.com/questions/50552046/how-to-replace-a-component-with-another-one-upon-event-button-click-in-react-j
 *
 */

Route::get('/', [PageController::class, 'homePage']);

Route::get('/uploading', [PageController::class, 'uploadPage']);
