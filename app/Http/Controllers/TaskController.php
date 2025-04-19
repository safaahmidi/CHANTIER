<?php

namespace App\Http\Controllers;
use App\Models\Task;
use App\Models\Project;
use App\Models\Phase;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
//methode retourne la pavue Task mangement 
    public function index($projectId)
    {
        $project = Project::with(['phases.tasks'])->findOrFail($projectId);
        
        $phases = $project->phases->map(function ($phase) {
            return [
                'id' => $phase->id,
                'name' => $phase->name,
                'tasks' => $phase->tasks->map(function ($task) {
                    return [
                        'id' => $task->id,
                        'title' => $task->title,
                        'remarks' => $task->remarks,
                        'status' => $task->status,
                        'priority' => $task->priority,
                        'startDate' => $task->start_date,
                        'endDate' => $task->end_date,
                    ];
                })
            ];
        });

        return Inertia::render('TasksManagement', [
            'project' => $project,
            'initialPhases' => $phases,
            'defaultStatusOptions' => [
                ['value' => 'À faire', 'color' => 'bg-red-500'],
                ['value' => 'En cours', 'color' => 'bg-yellow-500'],
                ['value' => 'Fait', 'color' => 'bg-green-500'],
                ['value' => 'Bloqué', 'color' => 'bg-purple-500'],
            ],
            'defaultPriorityOptions' => [
                ['value' => 'Haute', 'color' => 'bg-red-500'],
                ['value' => 'Moyenne', 'color' => 'bg-yellow-500'],
                ['value' => 'Basse', 'color' => 'bg-green-500'],
            ]
        ]);
    }
    



//pour enregistrer les taches saisiies en backend 
    public function store(Request $request, Project $project, Phase $phase)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'remarks' => 'nullable|string',
        'status' => 'required|string',
        'priority' => 'required|string',
        'start_date' => 'required|date',
        'end_date' => 'required|date|after_or_equal:start_date',
        'files' => 'nullable|json'
    ]);

    $task = $phase->tasks()->create([
        'project_id' => $project->id,
        'name' => $validated['name'],
        'remarks' => $validated['remarks'],
        'status' => $validated['status'],
        'priority' => $validated['priority'],
        'start_date' => $validated['start_date'],
        'end_date' => $validated['end_date'],
        'files' => $validated['files'] ?? null
    ]);

    // return response()->json($task, 201);
    return redirect()->route('tasks.index', ['id' => $project->id])
            ->with('success', 'Task created successfully!');
}

//pour modifier  un champs details dans task
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

        return redirect()->back();
    }

//supprimer la tache 
    public function destroy($projectId, $taskId)
    {
        Task::findOrFail($taskId)->delete();
        return redirect()->back();
    }
}