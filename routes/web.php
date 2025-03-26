<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\Verification;
use App\Http\Middleware\VerificationClient;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardClientController;
// use App\Http\Controllers\ResourceController;
use App\Http\Controllers\ConstructionStepController;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});






// Route pour afficher la page de contact
Route::get('/contact', function () {
    return Inertia::render('Contact', ['user' => auth()->user()]);
})->name('contact');

// Route pour soumettre le formulaire de contact
Route::post('/contact/send', [ContactController::class, 'store'])->name('contact.send');

// Route::get('/contact', fn() => Inertia::render('Contact',['user'=>auth()->user()]))->name('contact');

Route::get('/', fn() => Inertia::render('Home',['user'=>auth()->user()]))->name('home');


// Route pour le Dashboard de l'admin
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified', Verification::class])->name('dashboard');

// routes/web.php

// Route::middleware(['auth'])->group(function () {
//     // Dashboard
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     })->name('dashboard');

//     // Gestion des tâches
//     Route::get('/projects/{id}/tasks', function ($id) {
//         return Inertia::render('TaskManagement', ['projectId' => $id]);
//     })->name('tasks');
// });



// // Route pour le Dashboard du client
// Route::get('/dashboardClient', function () {
//     return Inertia::render('DashboardClient');
// })->middleware(['auth'])->name('dashboardClient');
// Route::middleware(['auth', VerificationClient::class])->group(function () {
//     Route::get('/dashboardClient', [DashboardClientController::class, 'index'])->name('dashboardClient');
//     Route::post('/admin/projects/{projectId}/assign', [ProjectController::class, 'assignProjectToClient'])->name('admin.projects.assign');
// });




use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
// use App\Http\Controllers\WorkerController;
use App\Http\Controllers\WorkerAttendanceController;
use App\Http\Controllers\SafetyController;
// routes/web.php
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\ResourceMovementController;
use App\Http\Controllers\ResourceAlertController;



Route::middleware(['auth', Verification::class])->group(function () {
    // Dashboard route
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Project routes
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::post('/projects/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    Route::get('/projects/{id}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::put('/projects/{id}', [ProjectController::class, 'update'])->name('projects.update');
 // Routes pour les tâches
 Route::get('/projects/{id}/tasks', [TaskController::class, 'index'])->name('tasks.index');
 Route::post('/projects/{id}/tasks', [TaskController::class, 'store'])->name('tasks.store');
 Route::put('/projects/{id}/tasks/{taskId}', [TaskController::class, 'update'])->name('tasks.update');
 Route::delete('/projects/{id}/tasks/{taskId}', [TaskController::class, 'destroy'])->name('tasks.destroy');
 
  // Routes pour les ouvriers
//   Route::get('/projects/{id}/workers', [WorkerController::class, 'index'])->name('workers.index');
//   Route::post('/projects/{id}/workers', [WorkerController::class, 'store'])->name('workers.store');
//   Route::put('/workers/{id}/presence', [WorkerController::class, 'updatePresence'])->name('workers.updatePresence');
//   Route::delete('/workers/{id}', [WorkerController::class, 'destroy'])->name('workers.destroy');





//with claude 
// // Routes existantes
// Route::post('/workers/{id}', [WorkerController::class, 'store'])->name('workers.store');
// Route::post('/workers/{id}/update-presence', [WorkerController::class, 'updatePresence'])->name('workers.updatePresence');
// Route::post('/workers/{id}/destroy', [WorkerController::class, 'destroy'])->name('workers.destroy');

// // Nouvelles routes pour le pointage
// Route::get('/projects/{id}/workers/attendance', [WorkerAttendanceController::class, 'index'])->name('workers.attendance');
// Route::post('/workers/{id}/mark-attendance', [WorkerAttendanceController::class, 'markAttendance'])->name('workers.mark-attendance');
// Route::post('/workers/generate-payments', [WorkerAttendanceController::class, 'generateWeeklyPayment'])->name('workers.generate-payments');
// Route::post('/payments/{id}/mark-paid', [WorkerAttendanceController::class, 'markPaymentPaid'])->name('workers.mark-payment-paid');
// Route::get('/projects/{id}/workers/previous-week', [WorkerAttendanceController::class, 'previousWeek'])->name('workers.previous-week');
// Route::get('/projects/{id}/workers/next-week', [WorkerAttendanceController::class, 'nextWeek'])->name('workers.next-week');


    // Worker Attendance routes
    Route::get('/projects/{id}/workers/attendance', [WorkerAttendanceController::class, 'index'])->name('workers.attendance');
    Route::post('/workers/{id}/mark-attendance', [WorkerAttendanceController::class, 'markAttendance'])->name('workers.mark-attendance');
    Route::post('/workers/generate-payments', [WorkerAttendanceController::class, 'generateWeeklyPayment'])->name('workers.generate-payments');
    Route::post('/payments/{id}/mark-paid', [WorkerAttendanceController::class, 'markPaymentPaid'])->name('workers.mark-payment-paid');
    Route::get('/projects/{id}/workers/previous-week', [WorkerAttendanceController::class, 'previousWeek'])->name('workers.previous-week');
    Route::get('/projects/{id}/workers/next-week', [WorkerAttendanceController::class, 'nextWeek'])->name('workers.next-week');


      // Routes pour les ressources
      Route::resource('resources', ResourceController::class);
      Route::resource('resources/{resource}/movements', ResourceMovementController::class)->only(['store', 'index']);
      Route::resource('resources/{resource}/alerts', ResourceAlertController::class)->only(['index', 'acknowledge']);

    Route::get('/projects/{id}/safety', [SafetyController::class, 'index'])->name('safety.index');
    Route::get('/test', function () {
        $Clients = DB::select('call  GetClients()');
        return $Clients;
    });
});







// Routes pour les clients
Route::middleware(['auth', VerificationClient::class])->group(function () {
    Route::get('/client/dashboard', [DashboardClientController::class, 'index'])->name('client.dashboard');
    // Route::get('/projects/{id}/tasks', [TaskController::class, 'index'])->name('tasks.index');
    // Route::get('/projects/{id}/resources', [ResourceController::class, 'index'])->name('resources.index');
});





Route::middleware('auth')->group(function () {
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';





// // TABLE TASKS 
// Route::get('/tasks', [TaskController::class, 'getAllTasks'])->name('tasks.all');
//     // Afficher les tâches pour un projet (GET)
// Route::get('/projects/{id}/tasks', [TaskController::class, 'index'])->name('tasks.index');
    
//     // Ajouter une tâche à un projet (POST)
// Route::post('/projects/{id}/tasks', [TaskController::class, 'store'])->name('tasks.store');
// // Assurez-vous d'avoir une route pour la mise à jour de la tâche
// Route::put('tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');




   

// Route::get('/project/{id}/resources', [ResourceController::class, 'index'])->name('resources.index');



// Route::get('/projects/{projectId}/construction-steps', [ConstructionStepController::class, 'index'])
// ->name('construction-steps.index');

// // Mettre à jour le prix d'une étape
// Route::post('/projects/{projectId}/steps/{stepId}/update-price', [ConstructionStepController::class, 'updateStepPrice'])
// ->name('steps.update-price');

// // Confirmer le paiement d'une étape
// Route::post('/projects/{projectId}/steps/{stepId}/confirm', [ConstructionStepController::class, 'confirmStep'])
// ->name('steps.confirm');

