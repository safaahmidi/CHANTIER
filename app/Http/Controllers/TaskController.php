<?php


// namespace App\Http\Controllers;

// use App\Models\Task;
// use App\Models\Project;
// use Illuminate\Http\Request;
// use Inertia\Inertia;

// class TaskController extends Controller
// {
//     // Afficher les tâches d'un projet
//     public function index($projectId)
//     {
//         $project = Project::with('tasks')->findOrFail($projectId);
//         return Inertia::render('TasksManagement', [
//             'project' => $project
//         ]);
//     }

//     // Stocker une nouvelle tâche
//     public function store(Request $request, $projectId)
//     {
//         $request->validate([
//             'name' => 'required|string|max:255',
//             'assigned_to' => 'nullable|email',
//             'status' => 'nullable|string',
//             'priority' => 'nullable|string',
//             'start_date' => 'nullable|date', // Nouveau champ
//             'end_date' => 'nullable|date', // Nouveau champ
//             'remarks' => 'nullable|string',
//             'files' => 'nullable|json',
//             'timeline' => 'nullable|string'
//         ]);

//         $project = Project::findOrFail($projectId);
//         $task = $project->tasks()->create($request->all());

//         return redirect()->back()->with('success', 'Tâche ajoutée avec succès.');
//     }

//     // Mettre à jour une tâche
//     public function update(Request $request, $projectId, $taskId)
//     {
//         $request->validate([
//             'name' => 'nullable|string|max:255',
//             'assigned_to' => 'nullable|email',
//             'status' => 'nullable|string',
//             'priority' => 'nullable|string',
//             'start_date' => 'nullable|date', // Nouveau champ
//             'end_date' => 'nullable|date', // Nouveau champ
//             'remarks' => 'nullable|string',
//             'files' => 'nullable|json',
//             'timeline' => 'nullable|string'
//         ]);

//         $task = Task::findOrFail($taskId);
//         $task->update($request->all());

//         return redirect()->back()->with('success', 'Tâche mise à jour avec succès.');
//     }

//     // Supprimer une tâche
//     public function destroy($projectId, $taskId)
//     {
//         $task = Task::findOrFail($taskId);
//         $task->delete();

//         return redirect()->back()->with('success', 'Tâche supprimée avec succès.');
//     }
// }




// namespace App\Http\Controllers;

// use App\Models\Task;
// use App\Models\Project;
// use Illuminate\Http\Request;
// use Inertia\Inertia;

// class TaskController extends Controller
// {
//     // Afficher les tâches d'un projet
//     public function index($projectId)
//     {
//         $project = Project::with('tasks')->findOrFail($projectId);
//         return Inertia::render('TasksManagement', [
//             'project' => $project
//         ]);
//     }
//     // public function index($projectId)
//     // {
//     //     $project = Project::findOrFail($projectId); // Récupérez le projet
//     //     return Inertia::render('TasksManagement', [
//     //         'project' => $project, // Passez le projet à la vue
//     //         // ... autres données
//     //     ]);
//     // }


//     // Stocker une nouvelle tâche
//     public function store(Request $request, $projectId)
//     {
//         $request->validate([
//             'name' => 'required|string|max:255',
//             'assigned_to' => 'nullable|email',
//             'status' => 'nullable|string',
//             'priority' => 'nullable|string',
//             'start_date' => 'nullable|date',
//             'end_date' => 'nullable|date',
//             'remarks' => 'nullable|string', // Ajout du champ "Remarques"
//             'files' => 'nullable|json',
//             'timeline' => 'nullable|string',
//         ]);

//         $project = Project::findOrFail($projectId);
//         $task = $project->tasks()->create($request->all());

//         return redirect()->back()->with('success', 'Tâche ajoutée avec succès.');
//     }

//     // Mettre à jour une tâche
//     public function update(Request $request, $projectId, $taskId)
//     {
//         $request->validate([
//             'name' => 'nullable|string|max:255',
//             'assigned_to' => 'nullable|email',
//             'status' => 'nullable|string',
//             'priority' => 'nullable|string',
//             'start_date' => 'nullable|date',
//             'end_date' => 'nullable|date',
//             'remarks' => 'nullable|string', // Ajout du champ "Remarques"
//             'files' => 'nullable|json',
//             'timeline' => 'nullable|string',
//         ]);

//         $task = Task::findOrFail($taskId);
//         $task->update($request->all());

//         return redirect()->back()->with('success', 'Tâche mise à jour avec succès.');
//     }

//     // Supprimer une tâche
//     public function destroy($projectId, $taskId)
//     {
//         $task = Task::findOrFail($taskId);
//         $task->delete();

//         return redirect()->back()->with('success', 'Tâche supprimée avec succès.');
//     }
// }

// app/Http/Controllers/TaskController.php

// namespace App\Http\Controllers;

// use App\Models\Task;
// use App\Models\Project;
// use App\Models\Phase;
// use Illuminate\Http\Request;
// use Inertia\Inertia;

// class TaskController extends Controller
// {
//     public function index($projectId)
//     {
//         $project = Project::with(['phases.tasks'])->findOrFail($projectId);
//         return Inertia::render('Tasks/Index', [
//             'project' => $project,
//             'initialPhases' => $project->phases
//         ]);
//     }

//     public function store(Request $request, $projectId)
//     {
//         $validated = $request->validate([
//             'title' => 'required|string|max:255',
//             'remarks' => 'nullable|string',
//             'status' => 'required|string',
//             'priority' => 'required|string',
//             'start_date' => 'required|date',
//             'end_date' => 'required|date',
//             'phase_id' => 'required|exists:phases,id',
//         ]);

//         $task = Task::create([
//             ...$validated,
//             'project_id' => $projectId
//         ]);

//         return response()->json($task, 201);
//     }

//     public function update(Request $request, $taskId)
//     {
//         $validated = $request->validate([
//             'title' => 'sometimes|string|max:255',
//             'remarks' => 'nullable|string',
//             'status' => 'sometimes|string',
//             'priority' => 'sometimes|string',
//             'start_date' => 'sometimes|date',
//             'end_date' => 'sometimes|date',
//         ]);

//         $task = Task::findOrFail($taskId);
//         $task->update($validated);

//         return response()->json($task);
//     }

//     public function destroy($taskId)
//     {
//         Task::findOrFail($taskId)->delete();
//         return response()->json(null, 204);
//     }

//     // Pour les phases
//     // public function storePhase(Request $request, $projectId)
//     // {
//     //     $validated = $request->validate([
//     //         'name' => 'required|string|max:255'
//     //     ]);

//     //     $phase = Phase::create([
//     //         'name' => $validated['name'],
//     //         'project_id' => $projectId
//     //     ]);

//     //     return response()->json($phase, 201);
//     // }
// }



//2 EME CODE 
// namespace App\Http\Controllers;

// use App\Models\Task;
// use App\Models\Project;
// use Illuminate\Http\Request;
// use Inertia\Inertia;

// class TaskController extends Controller
// {
//     public function index($projectId)
//     {
//         $project = Project::findOrFail($projectId);
        
//         // Récupérer les tâches groupées par phase (simulée)
//         $tasks = Task::where('project_id', $projectId)
            
//             ->get();
        
//         return Inertia::render('TasksManagement', [
//             'project' => $project,
//             'initialPhases' => $this->formatPhases($tasks)
//         ]);
//     }

//     // Formatage des données pour le frontend
//     protected function formatPhases($groupedTasks)
//     {
//         return $groupedTasks->map(function ($tasks, $phaseName) {
//             return [
//                 'id' => md5($phaseName), // ID unique basé sur le nom
//                 'name' => $phaseName ?: 'Non classé',
//                 'tasks' => $tasks
//             ];
//         })->values()->toArray();
//     }

//     public function store(Request $request, $projectId)
//     {
//         $validated = $request->validate([
//             'title' => 'required|string|max:255',
//             'remarks' => 'nullable|string',
//             'status' => 'required|string',
//             'priority' => 'required|string',
//             'start_date' => 'required|date',
//             'end_date' => 'required|date',
//             'phase' => 'required|string', // Changé de phase_id à phase
//         ]);

//         $task = Task::create([
//             ...$validated,
//             'project_id' => $projectId
//         ]);

//         return response()->json($task, 201);
//     }

//     public function update(Request $request, $taskId)
//     {
//         $validated = $request->validate([
//             'title' => 'sometimes|string|max:255',
//             'remarks' => 'nullable|string',
//             'status' => 'sometimes|string',
//             'priority' => 'sometimes|string',
//             'start_date' => 'sometimes|date',
//             'end_date' => 'sometimes|date',
//             'phase' => 'sometimes|string', // Changé de phase_id à phase
//         ]);

//         $task = Task::findOrFail($taskId);
//         $task->update($validated);

//         return response()->json($task);
//     }

//     public function destroy($taskId)
//     {
//         Task::findOrFail($taskId)->delete();
//         return response()->json(null, 204);
//     }
// }


namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    // public function index($projectId)
    // {
    //     $project = Project::findOrFail($projectId);
        
    //     // Récupérer les phases distinctes et leurs tâches
    //     $phases = DB::table('tasks')
    //         ->where('project_id', $projectId)
    //         ->select('phase as name', DB::raw('count(*) as task_count'))
    //         ->groupBy('phase')
    //         ->get()
    //         ->map(function ($phase) use ($projectId) {
    //             return [
    //                 'id' => md5($phase->name),
    //                 'name' => $phase->name,
    //                 'tasks' => Task::where('project_id', $projectId)
    //                             ->where('phase', $phase->name)
    //                             ->get()
    //                             ->map(function ($task) {
    //                                 return [
    //                                     'id' => $task->id,
    //                                     'title' => $task->title,
    //                                     'remarks' => $task->remarks,
    //                                     'status' => $task->status,
    //                                     'priority' => $task->priority,
    //                                     'startDate' => $task->start_date,
    //                                     'endDate' => $task->end_date,
    //                                     'files' => [] // Adaptez si vous gérez les fichiers
    //                                 ];
    //                             })
    //             ];
    //         });

    //     return Inertia::render('TasksManagement', [
    //         'project' => $project,
    //         'phases' => $phases
    //     ]);
    // }
    public function index($projectId)
    {
        $project = Project::findOrFail($projectId);
        
        // Récupérer les phases distinctes
        $phases = Task::where('project_id', $projectId)
            ->select('phase as name')
            ->distinct()
            ->get()
            ->map(function ($phase) use ($projectId) {
                return [
                    'id' => md5($phase->name),
                    'name' => $phase->name,
                    'tasks' => Task::where('project_id', $projectId)
                                ->where('phase', $phase->name)
                                ->get()
                                ->map(function ($task) {
                                    return [
                                        'id' => $task->id,
                                        'title' => $task->name, // Utilisez name comme title
                                        'remarks' => $task->remarks,
                                        'status' => $task->status,
                                        'priority' => $task->priority,
                                        'startDate' => $task->start_date,
                                        'endDate' => $task->end_date,
                                        'files' => $task->files ?: []
                                    ];
                                })
                ];
            });
    
        return Inertia::render('TasksManagement', [
            'project' => $project,
            'initialPhases' => $phases
        ]);
    }
    
    public function store(Request $request, $projectId)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'remarks' => 'nullable|string',
            'status' => 'required|string',
            'priority' => 'required|string',
            'startDate' => 'required|date',
            'endDate' => 'required|date',
            'phaseId' => 'required|string',
        ]);
    
        $task = Task::create([
            'name' => $validated['title'], // title devient name
            'remarks' => $validated['remarks'],
            'status' => $validated['status'],
            'priority' => $validated['priority'],
            'start_date' => $validated['startDate'],
            'end_date' => $validated['endDate'],
            'phase' => $validated['phaseId'], // phaseId devient phase
            'project_id' => $projectId
        ]);
    
        return response()->json($task);
    }
    public function update(Request $request, $projectId, $taskId)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'remarks' => 'nullable|string',
            'status' => 'sometimes|string',
            'priority' => 'sometimes|string',
            'startDate' => 'sometimes|date',
            'endDate' => 'sometimes|date',
            'phaseId' => 'sometimes|string',
        ]);

        $task = Task::findOrFail($taskId);
        $task->update([
            'title' => $validated['title'] ?? $task->title,
            'remarks' => $validated['remarks'] ?? $task->remarks,
            'status' => $validated['status'] ?? $task->status,
            'priority' => $validated['priority'] ?? $task->priority,
            'start_date' => $validated['startDate'] ?? $task->start_date,
            'end_date' => $validated['endDate'] ?? $task->end_date,
            'phase' => $validated['phaseId'] ?? $task->phase,
        ]);

        return response()->json($task);
    }

    public function destroy($projectId, $taskId)
    {
        Task::findOrFail($taskId)->delete();
        return response()->json(null, 204);
    }
}