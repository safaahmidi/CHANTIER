<?php

// namespace App\Http\Controllers;

// use Inertia\Inertia;
// use App\Models\Project;

// class DashboardClientController extends Controller
// {
//     public function index()
//     {
//         // Récupérer les projets assignés à l'utilisateur connecté (client)
//         $projects = Project::where('email', auth()->user()->email)->get();

//         // Retourner la vue avec les projets
//         return Inertia::render('DashboardClient', [
//             'projects' => $projects,
//         ]);
//         return redirect()->route('dashboardClient');
//     }
    
   
// }