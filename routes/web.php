<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/**
 * Note:
 *  1. Sometimes route might have cache causing errors, need to type: "php artisan route:clear" in terminal.
 *  2. If website shows "500 server error", it might be bc .env file is not created.
 *  3. To generate default tables in database for the project, type "php artisan migrate" in terminal.
 *  4. To run this Laravel web app on XAMPP with MySQL integration, need to create virtual host. Otherwise, it'll show 404 when trying get request.
 *     Follow this tutorial and make sure to do all steps to make it work: https://divpusher.com/blog/how-to-run-laravel-on-windows-with-xampp/
 *
 * TODO:
 *  1.  Through the use of setState to set parent component's state, can update other components in same hierarchy without changing the page.
 *     Redesigning the page to only switching components instead of changing page is required.
 *      Link to set parent's state: https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs
 *      Link to updating/switching components: https://stackoverflow.com/questions/50552046/how-to-replace-a-component-with-another-one-upon-event-button-click-in-react-j
 *
 */

Route::get('/', [PageController::class, 'homePage']);

Route::get('/sound_player', [PageController::class, 'soundPlayerPage']);

Route::post('/upload_file', [FileController::class, 'uploadFile']);

Route::get('/get_categories', [FileController::class, 'getCategories']);

Route::get('/get_all_uploads', [FileController::class, 'getAllUploads']);

Route::post('/login', [UserController::class, 'login']);

Route::get('/logout', [UserController::class, 'logout']);

Route::post('/register', [UserController::class, 'register']);
