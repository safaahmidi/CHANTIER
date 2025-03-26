<?php
// app/Models/ResourceMovement.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResourceMovement extends Model
{
    use HasFactory;

    protected $fillable = [
        'resource_id', 'movement_type', 'quantity', 'details'
    ];

    public function resource()
    {
        return $this->belongsTo(Resource::class);
    }
}
