<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SafetyMeasure extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'category',
        'title',
        'description',
        'implementation_date',
        'priority',
        'status',
        'corrective_action',
    ];

    protected $casts = [
        'implementation_date' => 'date',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
