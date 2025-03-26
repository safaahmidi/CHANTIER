<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // Importez BelongsTo
use Illuminate\Database\Eloquent\Relations\HasMany;   // Importez HasMany

class Worker extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'skills', 'present', 'project_id'];

    // Relation avec le projet
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    // Relation avec les présences (attendances)
    public function attendances(): HasMany
    {
        return $this->hasMany(Attendance::class);
    }

    // Relation avec les paiements hebdomadaires
    public function weeklyPayments(): HasMany
    {
        return $this->hasMany(WeeklyPayment::class);
    }

    // Méthode pour vérifier si l'ouvrier est présent aujourd'hui
    public function isPresentToday(): bool
    {
        return $this->attendances()
            ->where('date', now()->toDateString())
            ->where('status', 'present')
            ->exists();
    }

    // Méthode pour obtenir le nombre de jours travaillés cette semaine
    public function daysWorkedThisWeek(): int
    {
        $startOfWeek = now()->startOfWeek();
        $endOfWeek = now()->endOfWeek();

        return $this->attendances()
            ->whereBetween('date', [$startOfWeek, $endOfWeek])
            ->where('status', 'present')
            ->count();
    }
}