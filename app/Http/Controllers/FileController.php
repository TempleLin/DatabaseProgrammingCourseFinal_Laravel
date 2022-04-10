<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    private array $acceptablePicFileExtensions = array('jpg', 'png', 'svg');
    private array $acceptableSoundFileExtensions = array('aac', 'wav', 'mp3');

    public function uploadFile(Request $request) {
        $picFile = $request->file('picFileSelect'); //'picFileSelect' is 'name' attribute of the form's file input.
        $soundFile = $request->file('soundFileSelect');
        if ($picFile === null || $soundFile === null) {
            return 'FILE NULL';
        }

        $picFileExtension = $picFile->extension();
        $soundFileExtension = $soundFile->extension();
        error_log("File extensions: $picFileExtension, $soundFileExtension"); //error_log prints out in terminal.

        $picFileExtMatch = false;
        foreach ($this->acceptablePicFileExtensions as $extension) {
            if ($extension === $picFileExtension) $picFileExtMatch = true;
        }
        $soundFileExtMatch = false;
        foreach ($this->acceptableSoundFileExtensions as $extension) {
            if ($extension === $soundFileExtension) $soundFileExtMatch = true;
        }
        if (!$picFileExtMatch || !$soundFileExtMatch) {
            return 'FILE UNMATCHED';
        }

        $time = time();
        $picFileName = $time . '_' . $picFile->getClientOriginalName();
        $soundFileName = $time . '_' . $soundFile->getClientOriginalName();

        $picFile->move(public_path('/upload/thumbnails'), $picFileName);

        $input = $request->all();
        $input['soundType'] === 'Music'? $soundFile->move(public_path('/upload/sounds/music'), $soundFileName)
            : $soundFile->move(public_path('/upload/sounds/sound'), $soundFileName);

        return 'SUCCESS';
    }
}
