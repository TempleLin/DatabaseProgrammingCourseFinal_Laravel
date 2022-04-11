<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id'); //Primary key.
            $table->integer('sound_type'); //0 for sound, 1 for music.
            $table->string('category', 50);
        });

        if (DB::table('categories')->count() === 0) {
//            DB::insert('INSERT INTO categories (sound_type, category) VALUES (?, ?)')
            $data = [
                ['sound_type' => 0, 'category' => 'Street'],
                ['sound_type' => 0, 'category' => 'Indoor'],
                ['sound_type' => 1, 'category' => 'Romance'],
                ['sound_type' => 1, 'category' => 'Slice of Life'],
            ];
            DB::table('categories')->insert($data);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
