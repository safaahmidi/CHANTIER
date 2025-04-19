<?php
namespace App\Http\Controllers;

use App\Models\Ressource; // Ajoute cette ligne
use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class RessourceController extends Controller
{
    
    public function index1($projectId)
{
    // Trouve ou crée la ressource pour ce projet
    $ressource = Ressource::firstOrCreate(['project_id' => $projectId]);
    return Inertia::render('Ressources', [
        'ressources' => $ressource,
        'project' => Project::find($projectId) // Envoie aussi les infos du projet si besoin
    ]);
}

    public function update1(Request $request, $projectId, $id)
    {
        $ressource = Ressource::where('project_id', $projectId)->findOrFail($id);
        
        $data = $request->validate([
            'fer' => 'sometimes|boolean',
            'simon' => 'sometimes|boolean',
            'quantite_fer' => 'sometimes|integer|min:0',
            'quantite_simon' => 'sometimes|integer|min:0'
        ]);
        
        $ressource->update($data);
        
        return redirect()->back();
    }
}