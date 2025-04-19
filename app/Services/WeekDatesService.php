<?php

namespace App\Services;

use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

class WeekDatesService
{
    public function generateWeekDates(string $startDate = null): Collection
    {
        $start = $startDate ? Carbon::parse($startDate) : now()->startOfWeek();
        
        return collect(range(0, 6))->map(function ($day) use ($start) {
            $date = $start->copy()->addDays($day);
            return [
                'date' => $date->toDateString(),
                'day' => $date->shortDayName,
                'formatted' => $date->format('d/m/Y'),
                'full_day' => $date->dayName,
                'is_weekend' => $date->isWeekend(),
                'is_today' => $date->isToday(),
            ];
        });
    }
}