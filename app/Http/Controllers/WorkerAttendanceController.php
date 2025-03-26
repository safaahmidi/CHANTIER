<?php

namespace App\Http\Controllers;

use App\Models\Worker;
use App\Models\Attendance;
use App\Models\WeeklyPayment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class WorkerAttendanceController extends Controller
{
    // public function index(Request $request, $projectId)
    // {
    //     $project = \App\Models\Project::findOrFail($projectId);
        
    //     $date = $request->date ? Carbon::parse($request->date) : Carbon::today();
    //     $weekStart = (clone $date)->startOfWeek();
    //     $weekEnd = (clone $date)->endOfWeek();
        
    //     // Récupérer tous les ouvriers du projet
    //     $workers = Worker::where('project_id', $projectId)
    //         ->with(['attendances' => function($query) use ($weekStart, $weekEnd) {
    //             $query->whereBetween('date', [$weekStart, $weekEnd]);
    //         }])
    //         ->get();
        
    //     // Organiser les présences par jour de la semaine
    //     $workersWithAttendance = $workers->map(function($worker) use ($weekStart) {
    //         $weeklyAttendance = [];
            
    //         // Initialiser les 7 jours de la semaine
    //         for ($i = 0; $i < 7; $i++) {
    //             $currentDate = (clone $weekStart)->addDays($i);
    //             $weeklyAttendance[$currentDate->format('Y-m-d')] = null;
    //         }
            
    //         // Remplir avec les données d'assiduité existantes
    //         foreach ($worker->attendances as $attendance) {
    //             $weeklyAttendance[$attendance->date->format('Y-m-d')] = $attendance;
    //         }
            
    //         // Compter les jours travaillés cette semaine
    //         $daysWorked = array_reduce($weeklyAttendance, function($carry, $item) {
    //             return $carry + ($item && $item->status === 'present' ? 1 : 0);
    //         }, 0);
            
    //         return [
    //             'id' => $worker->id,
    //             'name' => $worker->name,
    //             'skills' => $worker->skills,
    //             'present' => $worker->present,
    //             'weekly_attendance' => $weeklyAttendance,
    //             'days_worked' => $daysWorked,
    //             // Vous pouvez ajouter d'autres informations comme le paiement hebdomadaire estimé
    //         ];
    //     });
        
    //     // Récupérer les dates de la semaine pour l'affichage
    //     $weekDates = [];
    //     for ($i = 0; $i < 7; $i++) {
    //         $currentDate = (clone $weekStart)->addDays($i);
    //         $weekDates[] = [
    //             'date' => $currentDate->format('Y-m-d'),
    //             'day' => $currentDate->format('D'),
    //             'day_number' => $currentDate->format('d'),
    //             'is_today' => $currentDate->isToday(),
    //             'is_weekend' => $currentDate->isWeekend(),
    //         ];
    //     }
        
    //     return Inertia::render('Workers/Attendance', [
    //         'project' => $project,
    //         'workers' => $workersWithAttendance,
    //         'weekDates' => $weekDates,
    //         'currentWeek' => [
    //             'start' => $weekStart->format('Y-m-d'),
    //             'end' => $weekEnd->format('Y-m-d'),
    //             'formatted' => $weekStart->format('d M') . ' - ' . $weekEnd->format('d M Y'),
    //         ],
    //     ]);
    // }
    


    public function index(Request $request, $projectId)
{
    $project = \App\Models\Project::findOrFail($projectId);
    
    // Logique pour récupérer les données de présence
    $date = $request->date ? Carbon::parse($request->date) : Carbon::today();
    $weekStart = (clone $date)->startOfWeek();
    $weekEnd = (clone $date)->endOfWeek();
    
    $workers = Worker::where('project_id', $projectId)
        ->with(['attendances' => function($query) use ($weekStart, $weekEnd) {
            $query->whereBetween('date', [$weekStart, $weekEnd]);
        }])
        ->get();
    
    // Organiser les données pour la vue
    $workersWithAttendance = $workers->map(function($worker) use ($weekStart) {
        $weeklyAttendance = [];
        
        for ($i = 0; $i < 7; $i++) {
            $currentDate = (clone $weekStart)->addDays($i);
            $weeklyAttendance[$currentDate->format('Y-m-d')] = null;
        }
        
        foreach ($worker->attendances as $attendance) {
            $weeklyAttendance[$attendance->date->format('Y-m-d')] = $attendance;
        }
        
        $daysWorked = array_reduce($weeklyAttendance, function($carry, $item) {
            return $carry + ($item && $item->status === 'present' ? 1 : 0);
        }, 0);
        
        return [
            'id' => $worker->id,
            'name' => $worker->name,
            'skills' => $worker->skills,
            'present' => $worker->present,
            'weekly_attendance' => $weeklyAttendance,
            'days_worked' => $daysWorked,
        ];
    });
    
    $weekDates = [];
    for ($i = 0; $i < 7; $i++) {
        $currentDate = (clone $weekStart)->addDays($i);
        $weekDates[] = [
            'date' => $currentDate->format('Y-m-d'),
            'day' => $currentDate->format('D'),
            'day_number' => $currentDate->format('d'),
            'is_today' => $currentDate->isToday(),
            'is_weekend' => $currentDate->isWeekend(),
        ];
    }
    
    return Inertia::render('Workers/Attendance', [
        'project' => $project,
        'workers' => $workersWithAttendance,
        'weekDates' => $weekDates,
        'currentWeek' => [
            'start' => $weekStart->format('Y-m-d'),
            'end' => $weekEnd->format('Y-m-d'),
            'formatted' => $weekStart->format('d M') . ' - ' . $weekEnd->format('d M Y'),
        ],
    ]);
}
    public function markAttendance(Request $request, $workerId)
    {
        $worker = Worker::findOrFail($workerId);
        $date = $request->date ? Carbon::parse($request->date)->toDateString() : Carbon::today()->toDateString();
        $status = $request->status ?? 'present';
        
        // Mettre à jour ou créer l'enregistrement de présence
        $attendance = Attendance::updateOrCreate(
            ['worker_id' => $workerId, 'date' => $date],
            [
                'status' => $status,
                'time_in' => $status === 'present' ? now() : null,
                'notes' => $request->notes ?? null,
            ]
        );
        
        // Mettre à jour le statut de présence global de l'ouvrier
        $worker->update([
            'present' => $status === 'present',
        ]);
        
        return redirect()->back()->with('success', 'Présence enregistrée avec succès');
    }
    
    public function generateWeeklyPayment(Request $request)
    {
        $weekStart = Carbon::parse($request->week_start)->startOfWeek();
        $weekEnd = Carbon::parse($request->week_start)->endOfWeek();
        $projectId = $request->project_id;
        
        $workers = Worker::where('project_id', $projectId)->get();
        
        foreach ($workers as $worker) {
            // Compter les jours travaillés
            $daysWorked = Attendance::where('worker_id', $worker->id)
                ->whereBetween('date', [$weekStart, $weekEnd])
                ->where('status', 'present')
                ->count();
            
            // Calculer le montant (exemple: 100€ par jour)
            // Remplacez ceci par votre logique de calcul réelle
            $dailyRate = $request->daily_rate ?? 100;
            $amount = $daysWorked * $dailyRate;
            
            // Créer ou mettre à jour le paiement hebdomadaire
            WeeklyPayment::updateOrCreate(
                [
                    'worker_id' => $worker->id,
                    'week_start' => $weekStart,
                    'week_end' => $weekEnd,
                ],
                [
                    'days_worked' => $daysWorked,
                    'amount' => $amount,
                    'is_paid' => false,
                ]
            );
        }
        
        return redirect()->back()->with('success', 'Paiements hebdomadaires générés avec succès');
    }
    
    public function markPaymentPaid(Request $request, $paymentId)
    {
        $payment = WeeklyPayment::findOrFail($paymentId);
        $payment->update([
            'is_paid' => true,
            'payment_date' => now(),
        ]);
        
        return redirect()->back()->with('success', 'Paiement marqué comme effectué');
    }
    
    public function previousWeek(Request $request, $projectId)
    {
        $currentDate = $request->date ? Carbon::parse($request->date) : Carbon::today();
        $newDate = (clone $currentDate)->subWeek();
        
        return redirect()->route('workers.attendance', [
            'id' => $projectId,
            'date' => $newDate->format('Y-m-d'),
        ]);
    }
    
    public function nextWeek(Request $request, $projectId)
    {
        $currentDate = $request->date ? Carbon::parse($request->date) : Carbon::today();
        $newDate = (clone $currentDate)->addWeek();
        
        return redirect()->route('workers.attendance', [
            'id' => $projectId,
            'date' => $newDate->format('Y-m-d'),
        ]);
    }
}

