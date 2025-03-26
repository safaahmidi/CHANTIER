<?php



namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    /**
     * Les attributs qui sont mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'project_id',       // ID du projet associé
        'name',             // Nom de la tâche
        'phase', // Ajoutez ceci
        'assigned_to',      // Email de la personne assignée
        'status',           // Statut de la tâche (À faire, En cours, Fait, Bloqué)
        'priority',         // Priorité de la tâche (Haute, Moyenne, Basse)
        'start_date',       // Date de début de la tâche
        'end_date',         // Date de fin de la tâche
        'remarks',          // Remarques supplémentaires
        'files',            // Fichiers joints (stockés sous forme de JSON)
        'timeline',         // Échéancier (À venir, En cours, Terminé)
    ];

    /**
     * Les attributs qui doivent être castés.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'start_date' => 'date', // Cast en type date
        'end_date' => 'date',   // Cast en type date
        'files' => 'json',      // Cast en type JSON
    ];

    /**
     * Relation avec le modèle Project.
     *
     * Une tâche appartient à un projet.
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}