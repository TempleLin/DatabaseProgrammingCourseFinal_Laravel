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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
//            $table->timestamps();
            $table->string('email', 50);
            $table->string('username', 50);
            $table->string('password', 50);
        });

        //Create default admin user.
        if (DB::table('users')->count() === 0) {
            $data = [
                ['email' => 'test1234@mmail.com', 'username' => 'admin', 'password' => 'asdf1234']
            ];
            DB::table('users')->insert($data);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
