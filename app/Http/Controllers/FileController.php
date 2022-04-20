<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FileController extends Controller
{
    private array $acceptablePicFileExtensions = array('jpg', 'png', 'svg');
    private array $acceptableSoundFileExtensions = array('aac', 'wav', 'mp3');

    private string $musicPath;
    private string $soundPath;
    private string $thumbnailPath;

    private string $musicPathURL;
    private string $soundPathURL;
    private string $thumbnailPathURL;


    //A simple constructor function which is called when we create an object of that Class.
    public function __construct() {
        /**
         * Note: Files should be saved to public path, but its location to save to database should be using its url (eg. localhost://public).
         *      So that, when retrieving the assets from database through frontend, image can be placed directly to HTML without chrome's blocking issued.
         *      (Setting files to HTML using local storage path (eg. D://public) is not allowed by default in Chrome.)
         */
        $this->musicPath = public_path('upload\sounds\music\\');
        $this->soundPath = public_path('upload\sounds\sound\\');
        $this->thumbnailPath = public_path('upload\thumbnails\\');

        //url() returns path to the public directory but in URL(eg. localhost://public) instead of local storage path. (eg. D://public)
        //Specifying image in local storage path is not allowed in Chrome by default.
        $this->musicPathURL = url('upload/sounds/music') . '/';
        $this->soundPathURL = url('upload/sounds/sound') . '/';
        $this->thumbnailPathURL = url('upload/thumbnails') . '/';
    }

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

        //TODO: upload column of this name along with pic file and sound file to table.
        $uploadName = $request->get('nameForUpload');
        error_log("Given upload name: $uploadName");

        $time = time();
        $picFileName = $time . '_' . $picFile->getClientOriginalName();
        $soundFileName = $time . '_' . $soundFile->getClientOriginalName();

        $picFile->move($this->thumbnailPath, $picFileName);

        $input = $request->all();
//        $input['soundType'] === 'Music'? $soundFile->move($this->musicPath, $soundFileName)
//            : $soundFile->move($this->soundPath, $soundFileName);
        switch ($input['soundType']) {
            case '0':
                $soundFile->move($this->soundPath, $soundFileName);
                $thisSoundFilePath = $this->soundPathURL;
                $thisSoundType = '0';
                break;
            case '1':
                $soundFile->move($this->musicPath, $soundFileName);
                $thisSoundFilePath = $this->musicPathURL;
                $thisSoundType = '1';
                break;
            default:
                return 'NoSoundNoMusicSelect';
        }

        /*
         * Note: Categories column should be from foreign table "categories".
         */
        $data = [
            ['name' => $uploadName, 'thumbnail_file_loc' => $this->thumbnailPathURL . $picFileName, 'sound_file_loc' => $thisSoundFilePath . $soundFileName,
                'sound_type' => $thisSoundType, 'category' => $input['categories']]
        ];
        DB::table('uploads')->insert($data);
        error_log('Categories value: ' . $input['categories']);

        return 'SUCCESS';
    }

    public function getCategories(Request $request) {
        $soundType = $request->input('sound_type');
        $result = DB::select("SELECT * FROM categories WHERE sound_type=$soundType");
        error_log("result:");
        return $result;
    }

    public function getAllUploads() {
        $result = DB::select("SELECT * FROM uploads");
        return $result;
    }
}
