<?php
namespace App\Http\Controllers;
use App\Models\Attendance;
use App\Models\Worker;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    public function markAttendance(Request $request, Worker $worker)
    {
        $validated = $request->validate([
            'date' => 'required|date',
            'present' => 'required|boolean'
        ]);

        $attendance = Attendance::updateOrCreate(
            ['worker_id' => $worker->id, 'date' => $validated['date']],
            ['present' => $validated['present']]
        );

        return response()->json([
            'success' => true,
            'attendance' => $attendance
        ]);
    }
}