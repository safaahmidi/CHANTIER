<?php
namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class SafetyController extends Controller
{


    // public function index($id)
    // {
    //     $project = Project::with('safetyChecks')->findOrFail($id);
        
    //     return Inertia::render('Safety/Index', [
    //         'project' => $project,
    //         'safetyChecks' => $project->safetyChecks ?: [] // Fournit un tableau vide si null
    //     ]);
    // }
    public function index($id)
{
    $project = Project::with(['safetyChecks' => function($query) {
        $query->orderBy('check_date', 'desc');
    }])->findOrFail($id);

    return Inertia::render('Safety/Index', [
        'project' => $project,
        'safetyChecks' => $project->safetyChecks
    ]);
}
}