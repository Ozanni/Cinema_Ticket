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
        Schema::create('movies', function (Blueprint $table) {
            $table->id('movie_id');
            $table->string('movie_name');
            $table->text('description');
            $table->string('director');
            $table->string('category'); // thể loại
            $table->string('classification'); // phân loại
            $table->integer('duration'); // thời lượng
            $table->longText('image');
            $table->text('link_trailer');
            $table->date('premiere'); // ngày khởi chiếu
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
};
