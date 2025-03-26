<?php
namespace App\Http\Controllers;

use App\Models\ResourceAlert;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ResourceAlertController extends Controller
{
    public function index()
    {
        // Récupérer toutes les alertes
        $alerts = ResourceAlert::all();

        // Retourner une réponse Inertia avec les alertes
        return Inertia::render('Alerts/Index', [
            'alerts' => $alerts
        ]);
    }

    public function acknowledge($id)
    {
        // Supprimer l'alerte et répondre en JSON
        $alert = ResourceAlert::findOrFail($id);
        $alert->delete();
        return response()->json(['message' => 'Alert acknowledged']);
    }
}
