@extends('includes/template')

{{--Docs for Wave.js: https://foobar404.dev/Wave.js/docs/--}}
{{--Docs for audioplayer.js jQuery plugin: https://www.jqueryscript.net/other/Clean-Audio-Player-jQuery.html--}}

@section('content')
    <link rel="stylesheet" href="{{asset('css/lib/audioplayer.css')}}">
    <div id="tsparticles"></div>
    <div class="">
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
    <script>
        let theAudio = $('audio').audioPlayer();

        let canvas = document.querySelector("canvas");
        let audio = document.querySelector("audio");
        // console.log(audio);
        let wave = new Wave(audio, canvas);

        canvasWidthHeightResponsive();

        /*
        For more information about how to add different kinds of animations, search my ImportantCodingTests repository (JavaScript/WaveJS).
         */
        wave.addAnimation(new wave.animations.Cubes({
            bottom: true,
            count: 60,
            cubeHeight: 10,
            fillColor: { gradient: ["#FAD961", "#F76B1C"] },
            lineColor: "rgba(0,0,0,0)",
            radius: 10
        }));
        wave.addAnimation(new wave.animations.Cubes({
            top: true,
            count: 60,
            cubeHeight: 10,
            fillColor: { gradient: ["#FAD961", "#F76B1C"] },
            lineColor: "rgba(0,0,0,0)",
            radius: 10
        }));
        wave.addAnimation(new wave.animations.Circles({
            lineColor: { gradient: ["#FAD961", "#FAD961", "#F76B1C"], rotate: 90 },
            lineWidth: 4,
            diameter: 20,
            count: 10,
            frequencyBand: "base"
        }));


        //Needs to resize canvas explicitly when window resizes.
        $(window).on('resize', () => {
            canvasWidthHeightResponsive();
        });

        function canvasWidthHeightResponsive() {
            //.audioplayer (The audio playing bar) is 96px, which is set under audioplayer.css. Only need to keep canvas slightly less than the audioplayer.
            canvas.height = window.innerHeight - 130;
            canvas.width = window.innerWidth;
        }
    </script>
@endsection

{{--Add additional page-owned js-related declarations here.--}}

@include('includes/page_end')
