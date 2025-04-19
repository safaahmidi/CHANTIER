<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function dashboard(Request $request)
    {
        $projects = Project::where('email', $request->user()->email)
            ->withCount('tasks')
            ->get();
        
        return Inertia::render('DashboardClient', [
            'projects' => $projects
        ]);
    }
}
