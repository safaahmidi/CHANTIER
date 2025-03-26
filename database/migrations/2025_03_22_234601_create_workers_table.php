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
        Schema::create('workers', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nom de l'ouvrier
            $table->string('skills'); // Compétences de l'ouvrier
            $table->boolean('present')->default(false); // Présence (true/false)
            $table->foreignId('project_id')->constrained()->onDelete('cascade'); // Clé étrangère vers le projet
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workers');
    }
};
