<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use App\Models\Worker;
use Illuminate\Http\Request;

class WorkerController extends Controller
{
    // Afficher la liste des ouvriers d'un projet
    // public function index($projectId)
    // {
    //     $project = Project::with('workers')->findOrFail($projectId);
    //     return Inertia::render('Workers/Index', [
    //         'project' => $project,
    //         'workers' => $project->workers,
    //     ]);
    // }
    // public function index($projectId)
    // {
    //     $project = Project::with('workers')->findOrFail($projectId);
    //     return Inertia::render('Workers/Index', [
    //         'project' => $project,
    //         'workers' => $project->workers,
    //     ]);
    // }
    // // Ajouter un ouvrier
    // public function store(Request $request, $projectId)
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'skills' => 'required|string|max:255',
    //     ]);

    //     Worker::create([
    //         'name' => $request->name,
    //         'skills' => $request->skills,
    //         'project_id' => $projectId,
    //     ]);

    //     return redirect()->back()->with('success', 'Ouvrier ajouté avec succès.');
    // }

    // // Mettre à jour la présence d'un ouvrier
    // public function updatePresence(Request $request, $workerId)
    // {
    //     $worker = Worker::findOrFail($workerId);
    //     $worker->update(['present' => $request->present]);

    //     return redirect()->back()->with('success', 'Présence mise à jour.');
    // }

    // // Supprimer un ouvrier
    // public function destroy($workerId)
    // {
    //     $worker = Worker::findOrFail($workerId);
    //     $worker->delete();

    //     return redirect()->back()->with('success', 'Ouvrier supprimé.');
    // }
}