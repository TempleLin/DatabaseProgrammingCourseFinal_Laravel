@extends('includes/template')

@section('content')
<div class="center">
    <form name="form" method="post" action="uploading.blade.php" enctype="multipart/form-data" class="form-group">
        <input type="file" name="my_file" /><br /><br />
        <input type="submit" name="submit" value="Upload" class="btn btn-primary"/>
    </form>
</div>
@endsection
