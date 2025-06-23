<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('solar_panels', function (Blueprint $table) {
            $table->decimal('amount', 10, 2)->change();
        });
    }

    public function down()
    {
        Schema::table('solar_panels', function (Blueprint $table) {
            $table->decimal('amount', 8, 2)->change();
        });
    }
};
