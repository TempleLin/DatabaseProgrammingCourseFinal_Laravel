@extends('includes/template')

@section('content')
    <link rel="stylesheet" href="{{asset('css/responsive_image_gallery.css')}}">
    <div id="tsparticles"></div>

{{--    True(1) if logged in. else 0.--}}
    <div style="display:none;" id="loggedIn">{{$loggedIn}}</div>

    <!-- Page content -->
    <div class="main">
        <div id="root"></div>
    </div>
@endsection

@section('page_end_declares')
    <script src="{{asset('js/utils_constants.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/top_nav_bar.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/side_nav.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/musics_container.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/sounds_container.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/home_page.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/upload_form.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/register_form.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/login_form.js')}}" type="text/babel"></script>
    <script src="{{asset('js/jsx/single_page.js')}}" type="text/babel"></script>
    <script src="{{asset('js/animations.js')}}"></script>
@endsection

{{--Add additional page-owned js-related declarations here.--}}

@include('includes/page_end')
