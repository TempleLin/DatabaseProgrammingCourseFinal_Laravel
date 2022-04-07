<?php
$title = 'uploading';
require_once './includes/header.blade.php';
?>

<div class="center">
    <form name="form" method="post" action="upload.blade.php" enctype="multipart/form-data" class="form-group">
        <input type="file" name="my_file" /><br /><br />
        <input type="submit" name="submit" value="Upload" class="btn btn-primary"/>
    </form>
</div>

<?php
/**
 * Note: Remember to create 'upload' directory for placing uploaded files.
 */
if(isset($_POST['submit'])) {
    if (($_FILES['my_file']['name']!="")){
        // Where the file is going to be stored
        $target_dir = "upload/";
        $file = $_FILES['my_file']['name'];
        $path = pathinfo($file);
        $filename = $path['filename'];
        $ext = $path['extension'];
        $temp_name = $_FILES['my_file']['tmp_name'];
        $path_filename_ext = $target_dir.$filename.".".$ext;

        // Check if file already exists
        if (file_exists($path_filename_ext)) {
            echo "Sorry, file already exists.";
        }else{
            move_uploaded_file($temp_name,$path_filename_ext);
            echo "Congratulations! File Uploaded Successfully.";
        }
    }
}
?>

<?php require_once './includes/footer.blade.php'; ?>
