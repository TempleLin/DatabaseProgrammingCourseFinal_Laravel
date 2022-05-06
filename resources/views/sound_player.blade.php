@extends('includes/template')

{{--Docs for Wave.js: https://foobar404.dev/Wave.js/docs/--}}

@section('content')
    <link rel="stylesheet" href="{{asset('css/audio_player.css')}}">
    <div id="tsparticles"></div>
    <div class="audio_player_div center">
        <canvas></canvas>
        <br>
        <audio controls>
            <source src='{{$fileLink}}'>
        </audio>
    </div>
@endsection

@section('page_end_declares')
    <script src="https://cdn.jsdelivr.net/gh/foobar404/wave.js/dist/bundle.js"></script>
    <script>
        let canvas = document.querySelector("canvas");
        let audio = document.querySelector("audio");
        let wave = new Wave(audio, canvas);

        canvasWidthHeightResponsive();


        // // Simple example: add an animation
        // wave.addAnimation(new wave.animations.Wave());

        //
        // Intermediate example: add an animation with options
        // wave.addAnimation(new wave.animations.Arcs({
        //     lineWidth: 10,
        //     lineColor: "red",
        //     fillColor: 'white',
        //     count: 20
        // }));
        // wave.addAnimation(new wave.animations.Cubes({
        //     count: 20,
        //     cubeHeight: 100,
        //     frequencyBand: 'highs',
        //     gap: 3,
        //     top: true,
        //     right: true,
        //     bottom: true,
        //     left: true,
        //     center: true
        // }));

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

        // wave.addAnimation(new wave.animations.Wave({
        //     lineWidth: 10,
        //     lineColor: "blue",
        //     fillColor: 'cyan',
        //     count: 20
        // }));

        // // Expert example: add multiple animations with options
        // wave.addAnimation(new wave.animations.Square({
        //     count: 50,
        //     diamater: 300
        // }));

        // wave.addAnimation(new wave.animations.Glob({
        //     fillColor: {gradient: ["red","blue","green"], rotate: 45},
        //     lineWidth: 10,
        //     lineColor: "#fff"
        // }));

        // The animations will start playing when the provided audio element is played

        // 'wave.animations' is an object with all possible animations on it.

        // Each animation is a class, so you have to new-up each animation when passed to 'addAnimation'


        //Needs to resize canvas explicitly when window resizes.
        $(window).on('resize', () => {
            canvasWidthHeightResponsive();
        });

        function canvasWidthHeightResponsive() {
            canvas.height = window.innerHeight * 0.8;
            canvas.width = window.innerWidth * 0.8;
        }
    </script>
@endsection

{{--Add additional page-owned js-related declarations here.--}}

@include('includes/page_end')
