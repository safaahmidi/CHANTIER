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
// use App\Http\Controllers\ConstructionStepController;
use Inertia\Inertia;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;



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


use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\WorkerAttendanceController;
use App\Http\Controllers\WorkerController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\SafetyController;
use App\Http\Controllers\SafetyMeasureController;

use App\Http\Controllers\RessourceController;

use App\Http\Controllers\PhaseController;
use App\Http\Controllers\ClientProjectController;
use App\Http\Controllers\ClientController;
use App\Services\WeekDatesService;
use App\Models\Project;






Route::middleware(['auth', Verification::class])->group(function () {
    // Dashboard route
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('afficher-contact',[ContactController::class , 'afficher'])->name('afficher-contact');
    // Project routes
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::post('/projects/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    Route::get('/projects/{id}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::put('/projects/{id}', [ProjectController::class, 'update'])->name('projects.update');
 // Routes pour les tâches
 Route::get('/projects/{id}/tasks', [TaskController::class, 'index'])->name('tasks.index');
//  Route::post('/projects/{id}/tasks', [TaskController::class, 'store'])->name('tasks.store');
// To:
Route::post('/projects/{project}/phases/{phase}/tasks', [TaskController::class, 'store'])->name('tasks.store');
 Route::put('/projects/{id}/tasks/{taskId}', [TaskController::class, 'update'])->name('tasks.update');
 Route::delete('/projects/{id}/tasks/{taskId}', [TaskController::class, 'destroy'])->name('tasks.destroy');
 
 Route::delete('/projects/{project}/phases/{phase}', [PhaseController::class, 'destroy'])->name('phases.destroy');

// Route::post('/ressources/{id}', [RessourceController::class, 'update1'])->name('ressources.update');
    Route::get('/projects/{id}/safety', [SafetyController::class, 'index'])->name('safety.index');

    Route::get('/test', function () {
        $Clients = DB::select('call  GetClients()');
        return $Clients;
    });





    // rojects.safety-measures.toggle-status

    Route::resource('projects.safety-measures', SafetyMeasureController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

    Route::post('projects/{project}/safety-measures/{safetyMeasure}/toggle-status', 
    [SafetyMeasureController::class, 'toggleStatus'])
    ->name('projects.safety-measures.toggle-status')
    ->middleware(['auth', 'verified']);


    Route::put('/phases/{phase}', [PhaseController::class, 'update'])->name('phases.update');
    Route::post('/phases/{phase}/duplicate', [PhaseController::class, 'duplicate'])->name('phases.duplicate');
Route::post('/phases', [PhaseController::class, 'store'])->name('phases.store');

});

Route::middleware(['auth', 'verified'])->group(function () {
    // Worker routes
    Route::post('/workers', [WorkerController::class, 'store']);
    Route::delete('/workers/{worker}', [WorkerController::class, 'destroy']);
    Route::post('/workers/{worker}/attendance', [WorkerController::class, 'updateAttendance']);
    Route::post('/workers/generate-payments', [WorkerController::class, 'generatePayments']);

    // Inertia routes
    Route::get('/projects/{project}/workers', [WorkerController::class, 'index'])
    ->name('projects.workers');
    Route::get('/projects/{project}/workers/{direction}-week', function (Project $project, $direction) {
        $currentWeek = request()->input('week', now()->startOfWeek()->toDateString());
        $weekStart = Carbon::parse($currentWeek);
        
        if ($direction === 'previous') {
            $weekStart->subWeek();
        } elseif ($direction === 'next') {
            $weekStart->addWeek();
        }
        
        return redirect()->route('projects.workers', [
            'project' => $project,
            'week' => $weekStart->toDateString()
        ]);
    });
});





// Routes pour les clients
Route::middleware(['auth', VerificationClient::class])->group(function () {
    Route::get('/client/dashboard', [DashboardClientController::class, 'index'])->name('client.dashboard');
    // Route::get('/projects/{id}/tasks', [TaskController::class, 'index'])->name('tasks.index');
    // Route::get('/projects/{id}/resources', [ResourceController::class, 'index'])->name('resources.index');
});


// routes/web.php

// Client routes group
Route::middleware(['auth'])->prefix('client')->name('client.')->group(function () {
    Route::get('/dashboard', [ClientController::class, 'dashboard'])->name('dashboard');
    
    // Project tasks route
    Route::get('/projects/{project}/tasks', [ClientProjectController::class, 'showTasks'])
        ->name('projects.tasks');
});

Route::middleware('auth')->group(function () {
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



