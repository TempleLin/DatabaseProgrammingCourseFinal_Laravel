<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uploads', function (Blueprint $table) {
//            $table->timestamps();
            $table->string('name', 50)->primary(); //Name as primary key.
            $table->text('thumbnail_file_loc');
            $table->text('sound_file_loc');
            $table->integer('sound_type', false, false); //0 for sound, 1 for music.
            $table->integer('category', false, false); //Foreign key for music category.
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('uploads');
    }
};
