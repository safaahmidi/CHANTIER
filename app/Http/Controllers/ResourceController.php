<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;

// class ResourceController extends Controller
// {
//       // La méthode index pour afficher la liste des ressources
//       public function index($projectId)
//       {
//           // Exemple pour obtenir les ressources du projet par l'ID du projet
//           $resources = Resource::where('project_id', $projectId)->get();
  
//           // Retourner les ressources à la vue (ou Inertia.js si tu utilises Inertia)
//           return inertia('Resources/Index', ['resources' => $resources]);
//       }
// }
// app/Http/Controllers/ResourceController.php
namespace App\Http\Controllers;
use Inertia\Inertia;  // Ajoute cette ligne pour importer Inertia
use App\Models\Resource;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    // public function index()
    // {
    //     return Resource::all();
    // }
     // Afficher la liste des ressources dans Inertia
     public function index()
     {
        $resources = Resource::all();
        // Vérifie que tu renvoies correctement la page avec le bon chemin du composant React
        return Inertia::render('Resources', [
            'resources' => $resources 
        ]);
        
     }
 
     // Autres méthodes (store, update, show, destroy) restent les mêmes

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'stock_quantity' => 'required|integer',
            'state' => 'required|string',
            'supplier' => 'required|string',
            'expiration_date' => 'nullable|date',
        ]);

        $resource = Resource::create($validated);
        return response()->json($resource, 201);
    }

    public function show($id)
    {
        return Resource::with(['movements', 'alerts'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $resource = Resource::findOrFail($id);
        $resource->update($request->all());
        return response()->json($resource);
    }

    public function destroy($id)
    {
        Resource::destroy($id);
        return response()->json(['message' => 'Resource deleted']);
    }
}
