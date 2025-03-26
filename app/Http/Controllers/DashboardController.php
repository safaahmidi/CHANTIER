<?php

// app/Http/Controllers/DashboardController.php
namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $projects = Project::where('user_id',auth()->id())->get();
        $Clients = DB::select('call  GetClients()');
        return Inertia::render('Dashboard', [
            'projects' => $projects,
            'clients'=>$Clients
        ]);
    }
}
