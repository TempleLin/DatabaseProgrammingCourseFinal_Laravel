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
<script src="{{asset('js/jsx/index.js')}}" type="text/babel"></script>
<script src="{{asset('js/animations.js')}}"></script>
@endsection

@include('includes/page_end')
