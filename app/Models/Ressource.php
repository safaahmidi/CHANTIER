<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ressource extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'fer',
        'simon',
        'fer',
        'quantite_simon',
    ];
    public function project()
{
    return $this->belongsTo(Project::class);
}
}