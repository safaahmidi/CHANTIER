<?php
// app/Models/Resource.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'stock_quantity', 'state', 'supplier', 'expiration_date'
    ];

    public function movements()
    {
        return $this->hasMany(ResourceMovement::class);
    }

    public function alerts()
    {
        return $this->hasMany(ResourceAlert::class);
    }
}
