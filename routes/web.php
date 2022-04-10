<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

Route::post('/upload_file', function (Request $request) {
//    $file = $request->file('picFileSelect'); //'picFileSelect' is 'name' attribute of the form's file input.
//    if ($file === null) {
//        return 'File is null.';
//    }
//    $filename = time().'_'.$file->getClientOriginalName();
//    $uploadPath = public_path('/upload');
//    $file->move($uploadPath, $filename);
    $picFile = $request->file('picFileSelect');
    $soundFile = $request->file('soundFileSelect');
    if ($picFile === null || $soundFile === null) {
        return 'One or both of uploaded files are null.';
    }
    $time = time();
    $picFileName = $time . '_' . $picFile->getClientOriginalName();
    $soundFileName = $time . '_' . $soundFile->getClientOriginalName();

    $picFile->move(public_path('/upload/thumbnails'), $picFileName);

    $input = $request->all();
    $input['soundType'] === 'Music'? $soundFile->move(public_path('/upload/sounds/music'), $soundFileName)
        : $soundFile->move(public_path('/upload/sounds/sound'), $soundFileName);

    return "SUCCESS";
});
