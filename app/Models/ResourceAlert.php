<?php
// app/Models/ResourceAlert.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResourceAlert extends Model
{
    use HasFactory;

    protected $fillable = [
        'resource_id', 'alert_type', 'message'
    ];

    public function resource()
    {
        return $this->belongsTo(Resource::class);
    }
}
