<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Importez HasFactory

class WeeklyPayment extends Model
{
    use HasFactory; // Utilisez le trait HasFactory

    protected $fillable = [
        'worker_id', 'week_start', 'week_end', 
        'days_worked', 'amount', 'is_paid', 'payment_date'
    ];

    protected $casts = [
        'week_start' => 'date',
        'week_end' => 'date',
        'payment_date' => 'date',
        'is_paid' => 'boolean',
    ];

    public function worker(): BelongsTo
    {
        return $this->belongsTo(Worker::class);
    }
}