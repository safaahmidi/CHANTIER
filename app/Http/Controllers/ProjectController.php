<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    // Méthode pour afficher tous les projets de l'utilisateur connecté
    public function index()
    {
        $projects = Project::where('user_id', auth()->id())->get(); 
        return Inertia::render('Dashboard', [
            'projects' => $projects,
        ]);
    }

    // Méthode pour afficher le formulaire de création d'un projet
    public function create()
    {
        return Inertia::render('CreateProject');
    }

    // Méthode pour stocker un projet
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'details' => 'nullable|string',
            'budget_total' => 'nullable|numeric',
            'avanceClient' => 'nullable|numeric',
            'email' => 'required|email',
           
        ]);

        $userId = auth()->id();  // L'utilisateur connecté

        if (!$userId) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }

        // Créer un projet avec l'utilisateur authentifié
        $project = new Project;
        $project->name = $request->name;
        $project->details = $request->details;
        $project->budget_total = $request->budget_total;
        $project->avanceClient = $request->avanceClient;
        $project->user_id = $userId;
        $project->email = $request->email;
       
        $project->save();

        return redirect()->route('dashboard');
    }

    // Méthode pour éditer un projet
    public function edit($id)
    {
        $project = Project::findOrFail($id); 

        if ($project->user_id !== auth()->id()) {
            return redirect()->route('dashboard')->with('error', 'Non autorisé');
        }

        return Inertia::render('Edit', [
            'project' => $project,
        ]);
    }

    // Méthode pour mettre à jour un projet
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'details' => 'nullable|string',
            'budget_total' => 'required|numeric',
            'avanceClient' => 'required|numeric',
            'email' => 'required|email',
           
        ]);

        $project = Project::findOrFail($id);

        if ($project->user_id !== auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $project->update([
            'name' => $request->name,
            'details' => $request->details,
            'budget_total' => $request->budget_total,
            'avanceClient' => $request->avanceClient,
            'email' => $request->email,
        ]);

        return redirect()->route('dashboard');
    }

    // Méthode pour supprimer un projet
    public function destroy($id)
    {
        $project = Project::findOrFail($id);

        if ($project->user_id !== auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $project->delete();

        return redirect()->route('dashboard');
    }
}
