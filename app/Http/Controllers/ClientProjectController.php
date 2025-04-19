<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Phase;
use App\Models\Task;

use Inertia\Inertia;

class ClientProjectController extends Controller
{
    public function showTasks(Project $project)
    {
        // Verify the authenticated user's email matches the project's client_email
        if ($project->email !== auth()->user()->email) {
            abort(403);
        }

        // Load project with phases and tasks
        $project->load(['phases' => function($query) {
            $query->orderBy('order', 'asc')
                  ->with(['tasks' => function($query) {
                      $query->orderBy('created_at', 'asc');
                  }]);
        }]);

        return Inertia::render('ProjectTasks', [
            'project' => $project,
            'phases' => $project->phases,
        ]);
    }
}
