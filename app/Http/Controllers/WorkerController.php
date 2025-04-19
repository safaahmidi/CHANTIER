<?php

// app/Http/Controllers/WorkerController.php
namespace App\Http\Controllers;

use App\Models\Worker;
use App\Models\Attendance;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class WorkerController extends Controller
{
    public function index(Request $request, Project $project)
{
    $weekStart = $request->input('week_start', now()->startOfWeek()->toDateString());
    $weekEnd = $request->input('week_end', now()->endOfWeek()->toDateString());
    
    $workers = $project->workers()->with(['attendances' => function($query) use ($weekStart, $weekEnd) {
        $query->whereBetween('date', [$weekStart, $weekEnd]);
    }])->get();
    
    // Format the data for the frontend
    $weekDates = $this->generateWeekDates($weekStart);
    
    $formattedWorkers = $workers->map(function($worker) use ($weekDates) {
        $attendance = $weekDates->mapWithKeys(function($date) use ($worker) {
            $record = $worker->attendances->firstWhere('date', $date['date']);
            return [$date['date'] => $record ? $record->present : false];
        });
        
        $presentDays = $attendance->filter()->count();
        
        return [
            'id' => $worker->id,
            'name' => $worker->name,
            'daily_rate' => $worker->daily_rate,
            'payment_type' => $worker->payment_type,
            'attendance' => $attendance->values()->toArray(),
            'totalDays' => $presentDays,
            'totalPay' => $worker->payment_type === 'daily' 
                ? $presentDays * $worker->daily_rate 
                : min($presentDays, 5) * $worker->daily_rate,
            'paymentDate' => Carbon::parse($weekDates->last()['date'])->addDay()->format('d/m/Y')
        ];
    });
    
    return Inertia::render('Workers/Attendance', [
        'project' => $project,
        'workers' => $formattedWorkers,  // Changed from $workers to $formattedWorkers
        'weekDates' => $weekDates,
        'week' => $weekStart
    ]);
}
public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'daily_rate' => 'required|numeric|min:0',
            'payment_type' => 'required|in:daily,weekly',
            'project_id' => 'required|exists:projects,id'
        ]);
        
        Worker::create($validated);
        
        return redirect()->back()->with('success', 'Worker created successfully!');
    }

    public function destroy(Worker $worker)
    {
        $worker->delete();
        return redirect()->back()->with('success', 'Worker deleted successfully!');
    }

    public function updateAttendance(Request $request, Worker $worker)
    {
        $validated = $request->validate([
            'date' => 'required|date',
            'present' => 'required|boolean'
        ]);
        
        $worker->attendances()->updateOrCreate(
            ['date' => $validated['date']],
            ['present' => $validated['present']]
        );
        
        return redirect()->back()->with('success', 'Attendance updated!');
    }

    public function generatePayments(Request $request)
    {
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'week_start' => 'required|date',
            'week_end' => 'required|date'
        ]);
        
        // Implement your payment generation logic here
        
        return redirect()->back()->with('success', 'Payments generated successfully!');
    }

    private function generateWeekDates($startDate)
    {
        $start = Carbon::parse($startDate);
        $dates = collect();
        
        for ($i = 0; $i < 7; $i++) {
            $date = $start->copy()->addDays($i);
            $dates->push([
                'date' => $date->toDateString(),
                'day' => $date->shortDayName,
                'formatted' => $date->format('d/m/Y')
            ]);
        }
        
        return $dates;
    }
}