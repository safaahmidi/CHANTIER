<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Worker;
use Carbon\Carbon;

class WorkerAttendanceController extends Controller
{
    public function index($projectId)
    {
        $project = Project::findOrFail($projectId);
        $today = Carbon::today();
        
        // Génération des dates de la semaine
        $weekDates = [];
        for ($i = 0; $i < 7; $i++) {
            $date = $today->copy()->startOfWeek()->addDays($i);
            $weekDates[] = [
                'day' => $date->format('D'),
                'date' => $date->format('Y-m-d'),
                'formatted' => $date->format('d/m/Y')
            ];
        }

        $workers = Worker::with(['attendances' => function($query) use ($weekDates) {
            $query->whereBetween('date', [
                $weekDates[0]['date'],
                $weekDates[6]['date']
            ]);
        }])->where('project_id', $projectId)->get();

        return inertia('Workers/Attendance', [
            'project' => $project,
            'initialWorkers' => $workers->map(function($worker) use ($weekDates) {
                return [
                    'id' => $worker->id,
                    'name' => $worker->name,
                    'daily_rate' => $worker->daily_rate,
                    'payment_type' => $worker->payment_type,
                    'attendance' => $weekDates->map(function($date) use ($worker) {
                        return (bool) $worker->attendances
                            ->firstWhere('date', $date['date'])?->present;
                    }),
                    'totalDays' => $worker->attendances->where('present', true)->count(),
                    'totalPay' => $this->calculateTotalPay($worker),
                    'paymentDate' => $weekDates[6]['date']
                ];
            }),
            'weekDates' => $weekDates
        ]);
    }

    private function calculateTotalPay($worker)
    {
        $presentDays = $worker->attendances->where('present', true)->count();
        return $worker->payment_type === 'daily' 
            ? $presentDays * $worker->daily_rate 
            : min($presentDays, 5) * $worker->daily_rate;
    }
}