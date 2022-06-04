const {
    Component,
    Fragment
} = React;

/**
 * TODO: Change ALL_SOUNDS_GALLERY to MUSIC_GALLERY and SOUND_GALLERY individually. Change Homepage to single landing page.
 * TODO: Login form.
 * TODO: Register form.
 */

//'Symbol' is similar to enum in JS.
const ALL_SOUNDS_GALLERY = Symbol('all_sounds_gallery');
const MUSICS_GALLERY = Symbol('musics_gallery');
const UPLOAD_FORM = Symbol('upload_form');
const LOGIN_FORM = Symbol('login_form');
const REGISTER_FORM = Symbol('register_form');

const SIDENAV_HOME_CONTENTS = Symbol('sidenav_home_contents');
const SIDENAV_SOUND_CATEGORIES = Symbol('sidenav_sound_categories');
const SIDENAV_MUSIC_CATEGORIES = Symbol('sidenav_music_categories');

const SOUND_TYPE_ID = '0'
const MUSIC_TYPE_ID = '1'
