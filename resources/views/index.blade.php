@extends('includes/template')

@section('content')
    <link rel="stylesheet" href="{{asset('css/responsive_image_gallery.css')}}">
    <div id="tsparticles"></div>

    <!-- Page content -->
    <div class="main">
        <div id="root"></div>
    </div>
@endsection

@section('page_end_declares')
{{--    <script src="{{asset('js/jsx/image_gallery.js')}}" type="text/babel"></script>--}}
    <script src="{{asset('js/animations.js')}}"></script>
@endsection

{{--Add additional page-owned js-related declarations here.--}}

@include('includes/page_end')
