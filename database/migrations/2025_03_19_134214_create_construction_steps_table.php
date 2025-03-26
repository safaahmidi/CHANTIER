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
        Schema::create('construction_steps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained()->onDelete('cascade');
            $table->string('name'); // Nom de l'étape (Béton, Maçonnerie, etc.)
            $table->decimal('price', 10, 2)->default(0); // Prix saisi par le chef de chantier
            $table->boolean('confirmed')->default(false); // Si l'étape est confirmée et payée
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('construction_steps');
    }
};
