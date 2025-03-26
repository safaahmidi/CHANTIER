<?php

namespace App\Http\Controllers;

use App\Models\ResourceMovement;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ResourceMovementController extends Controller
{
    public function store(Request $request, $resourceId)
    {
        $validated = $request->validate([
            'movement_type' => 'required|string',
            'quantity' => 'required|integer',
            'details' => 'nullable|string',
        ]);

        $movement = ResourceMovement::create([
            'resource_id' => $resourceId,
            ...$validated
        ]);

        return response()->json($movement, 201);
    }

    public function index($resourceId)
    {
        $movements = ResourceMovement::where('resource_id', $resourceId)->get();
        
        // Retourner les mouvements sous forme de réponse JSON
        return response()->json($movements);
    }
}
