<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // Importez BelongsTo

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = ['worker_id', 'date', 'time_in', 'time_out', 'status', 'notes'];

    protected $casts = [
        'date' => 'date',
        'time_in' => 'datetime',
        'time_out' => 'datetime',
    ];

    // Relation avec l'ouvrier
    public function worker(): BelongsTo
    {
        return $this->belongsTo(Worker::class);
    }
}