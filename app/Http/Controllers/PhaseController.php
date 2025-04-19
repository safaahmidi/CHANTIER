<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Phase;
use App\Models\Project;



class PhaseController extends Controller
{
public function store(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'name' => 'required|string|max:255',
        ]);

        $phase = Phase::create([
            'project_id' => $validated['project_id'],
            'name' => $validated['name'],
            'order' => Phase::where('project_id', $validated['project_id'])->count()
        ]);

        return redirect()->back()->with('success', 'Phase created successfully');
    }
// public function duplicate(Phase $phase)
// {
//     $newPhase = $phase->replicate();
//     $newPhase->name = $phase->name . ' (Copie)';
//     $newPhase->order = Phase::where('project_id', $phase->project_id)->count();
//     $newPhase->save();

//     // Duplicate tasks
//     foreach ($phase->tasks as $task) {
//         $newTask = $task->replicate();
//         $newTask->phase_id = $newPhase->id;
//         $newTask->save();
//     }

//     return redirect()->back()->with('success', 'Phase duplicated successfully');
// } 
public function update(Request $request, Phase $phase)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
    ]);

    $phase->update($validated);

    return redirect()->back();
}



public function destroy(Project $project, Phase $phase)
{
    $phase->tasks()->delete();
    $phase->delete();

    return redirect()->back()->with('success', 'Phase supprimée avec succès');
}

}
