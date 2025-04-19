<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    // Définir les champs modifiables, y compris user_id
    protected $fillable = [
        'name',
        'details',
        'budget_total',
        'avanceClient',
        'email',
        'user_id',  // Ajouter user_id dans $fillable
    ];

    

    
   

    // Relation avec les tâches
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function workers()
    {
        return $this->hasMany(Worker::class);
    }

    public function safetyChecks()
    {
        return $this->hasMany(SafetyCheck::class);
    }
    public function phases()
    {
        return $this->hasMany(Phase::class);
    }

    

public function safetyMeasures()
    {
        return $this->hasMany(SafetyMeasure::class);
    }

}
