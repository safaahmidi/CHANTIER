<?php
// app/Models/Attendance.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Attendance extends Model
{
    protected $fillable = ['worker_id', 'date', 'present'];

    public function worker(): BelongsTo
    {
        return $this->belongsTo(Worker::class);
    }
}