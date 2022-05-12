@extends('includes/template')

{{--Docs for Wave.js: https://foobar404.dev/Wave.js/docs/--}}
{{--Docs for audioplayer.js jQuery plugin: https://www.jqueryscript.net/other/Clean-Audio-Player-jQuery.html--}}

@section('content')
    <link rel="stylesheet" href="{{asset('css/lib/audioplayer.css')}}">
{{--    Icons for the sidebar.--}}
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="{{asset('css/sound_play_sidebar.css')}}">

    <div id="mySidebar" class="sidebar">
{{--        Link to the google material icons: https://fonts.google.com/icons --}}
        <a href="#" class="sidebarClickable">
            <i class="material-icons">
                waves
            </i>
            <span class="icon-text">
                &nbsp;&nbsp;&nbsp;&nbsp;Wave
            </span>
        </a>
        <br>
        <a href="#" class="sidebarClickable">
            <i class="material-icons">
                view_in_ar
            </i>
            <span class="icon-text">
                &nbsp;&nbsp;&nbsp;&nbsp;Cubes
            </span>
        </a>
        <br>
        <a href="#" class="sidebarClickable">
            <i class="material-icons">
                radio_button_unchecked
            </i>
            <span class="icon-text">
                &nbsp;&nbsp;&nbsp;&nbsp;Circles
            </span>
        </a>
        <br>
        <a href="#" class="sidebarClickable">
            <i class="material-icons">
                bubble_chart
            </i>
            <span class="icon-text">
                &nbsp;&nbsp;&nbsp;&nbsp;Glob
            </span>
        </a>
        <br>
        <a href="#" class="sidebarClickable">
            <i class="material-icons">
                light_mode
            </i>
            <span class="icon-text">
                &nbsp;&nbsp;&nbsp;&nbsp;Shine
            </span>
        </a>
        <br>
        <a href="#" class="sidebarClickable">
            <i class="material-icons">
                square
            </i>
            <span class="icon-text">
                &nbsp;&nbsp;&nbsp;&nbsp;Square
            </span>
        </a>
        <br>
        <a href="#" class="sidebarClickable">
            <i class="material-icons">
                water_drop
            </i>
            <span class="icon-text">
                &nbsp;&nbsp;&nbsp;&nbsp;Arcs
            </span>
        </a>
        <br>
    </div>

    <div id="main">
        <canvas></canvas>
        <br>
        <audio controls loop>
            <source src='{{$fileLink}}'>
        </audio>
    </div>
@endsection

@section('page_end_declares')
    <script src="https://cdn.jsdelivr.net/gh/foobar404/wave.js/dist/bundle.js"></script>
    <script src="{{asset('js/lib/audioplayer.js')}}"></script>
    <script src="{{asset('js/sound_play_controls.js')}}"></script>
@endsection

{{--Add additional page-owned js-related declarations here.--}}

@include('includes/page_end')
