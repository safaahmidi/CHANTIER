<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (!Schema::hasColumn('projects', 'budget_total')) {
                $table->decimal('budget_total', 10, 2)->nullable();
            }
            if (!Schema::hasColumn('projects', 'avanceClient')) {
                $table->decimal('avanceClient', 10, 2)->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            if (Schema::hasColumn('projects', 'budget_total')) {
                $table->dropColumn('budget_total');
            }
            if (Schema::hasColumn('projects', 'avanceClient')) {
                $table->dropColumn('avanceClient');
            }
        });
    }
};
