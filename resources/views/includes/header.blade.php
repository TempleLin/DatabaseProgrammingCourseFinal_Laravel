<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!--    $title needs to be set before requiring this file.-->
    <title>SoundHeaven</title>
    <link rel="stylesheet" href="{{asset('css/index.css')}}">
    <link rel="stylesheet" href="{{asset('css/sidebar_menu.css')}}">
    <link rel="stylesheet" href="{{asset('css/animations.css')}}">

</head>
<body>
<!--Bootstrap container class.-->
<!--(.container-fluid takes 100% width no matter what, while .container depends on screen size.)-->
<div class="container-fluid">
