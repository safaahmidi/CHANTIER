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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained()->onDelete('cascade'); // Clé étrangère vers la table `projects`
            $table->string('name');
            $table->string('assigned_to')->nullable(); // Email de la personne assignée
            $table->string('status')->default('À faire'); // Statut de la tâche
            $table->string('priority')->default('Moyenne'); // Priorité de la tâche
            $table->date('start_date')->nullable(); // Date de début
            $table->date('end_date')->nullable(); // Date de fin
            $table->text('remarks')->nullable(); // Remarques
            $table->json('files')->nullable(); // Fichiers joints (stockés sous forme de JSON)
            $table->string('timeline')->default('À venir'); // Échéancier
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
