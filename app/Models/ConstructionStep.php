<?php

// app/Models/ConstructionStep.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConstructionStep extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'nom',
        'prix_saisi',
        'prix_confirme',
        'status',
    ];

    // Relation avec le projet
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
