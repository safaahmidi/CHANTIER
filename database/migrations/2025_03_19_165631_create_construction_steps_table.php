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
            $table->string('nom'); // Nom de l'étape (ex: BETON, MASSONERIE, etc.)
            $table->decimal('prix_saisi', 10, 2)->nullable(); // Le prix saisi par le chef de chantier
            $table->decimal('prix_confirme', 10, 2)->nullable(); // Le prix confirmé (après validation du client)
            $table->enum('status', ['en_attente', 'confirmé'])->default('en_attente'); // Statut de l'étape
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
