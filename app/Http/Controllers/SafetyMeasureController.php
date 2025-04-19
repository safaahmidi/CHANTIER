<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\SafetyMeasure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SafetyMeasureController extends Controller
{
    public function index(Project $project)
    {
        return Inertia::render('Safety/Index', [
            'project' => $project,
            'safetyMeasures' => $project->safetyMeasures()->latest()->get(),
        ]);
    }

    public function store(Request $request, Project $project)
    {
        $validated = $request->validate([
            'category' => 'required|string',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'implementation_date' => 'required|date',
            'priority' => 'required|in:low,medium,high',
            'status' => 'required|in:pending,completed',
            'corrective_action' => 'nullable|string',
        ]);

        $project->safetyMeasures()->create($validated);

        return redirect()->back()->with('success', 'Safety measure added successfully');
    }

    public function update(Request $request, Project $project, SafetyMeasure $safetyMeasure)
    {
        $this->authorize('update', $safetyMeasure);

        $validated = $request->validate([
            'category' => 'required|string',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'implementation_date' => 'required|date',
            'priority' => 'required|in:low,medium,high',
            'status' => 'required|in:pending,completed',
            'corrective_action' => 'nullable|string',
        ]);

        $safetyMeasure->update($validated);

        return redirect()->back()->with('success', 'Safety measure updated successfully');
    }

    public function destroy(Project $project, SafetyMeasure $safetyMeasure)
    {
        $this->authorize('delete', $safetyMeasure);
        
        $safetyMeasure->delete();
        
        return redirect()->back()->with('success', 'Safety measure deleted successfully');
    }

    public function toggleStatus(Project $project, SafetyMeasure $safetyMeasure)
    {
        // $this->authorize('update', $safetyMeasure);
        
        $safetyMeasure->update([
            'status' => $safetyMeasure->status === 'pending' ? 'completed' : 'pending'
        ]);
        
        return redirect()->back()->with('success', 'Status updated successfully');
    }
}
