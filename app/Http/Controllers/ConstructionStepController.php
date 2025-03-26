<?php

namespace App\Http\Controllers;

use App\Models\ConstructionStep;
use App\Models\Project;
use Illuminate\Http\Request;

class ConstructionStepController extends Controller
{
    // Afficher les étapes pour un projet donné
    public function index($projectId)
    {
        $project = Project::with('constructionSteps')->findOrFail($projectId);
    
        // Initialiser les étapes si elles n'existent pas
        $steps = $this->initializeStepsIfNotExist($project);
    
        return inertia('ConstructionSteps/Index', [
            'steps' => $steps,
            'projectId' => $projectId,
            'budgetTotal' => $project->budget_total, // Budget total du projet
            'avanceClient' => $project->avanceClient, // Avance client
        ]);
    }

    // Initialiser les étapes si elles n'existent pas
    private function initializeStepsIfNotExist(Project $project)
    {
        // Les étapes sont déjà chargées grâce à with('constructionSteps')
        $steps = $project->constructionSteps;

        // Si aucune étape n'existe, créer les étapes par défaut
        if ($steps->isEmpty()) {
            $defaultSteps = [
                ['nom' => 'Béton', 'prix_saisi' => 0, 'status' => 'en_attente'],
                ['nom' => 'Maçonnerie', 'prix_saisi' => 0, 'status' => 'en_attente'],
                ['nom' => 'Enduit', 'prix_saisi' => 0, 'status' => 'en_attente'],
                ['nom' => 'Main d\'œuvre', 'prix_saisi' => 0, 'status' => 'en_attente'],
                ['nom' => 'Bénéfice', 'prix_saisi' => 0, 'status' => 'en_attente'],
                ['nom' => 'Impôts', 'prix_saisi' => 0, 'status' => 'en_attente'],
            ];

            foreach ($defaultSteps as $stepData) {
                ConstructionStep::create([
                    'project_id' => $project->id,
                    'nom' => $stepData['nom'],
                    'prix_saisi' => $stepData['prix_saisi'],
                    'status' => $stepData['status'],
                ]);
            }

            // Recharger les étapes après création
            $steps = $project->fresh()->constructionSteps;
        }

        return $steps;
    }

    // Mettre à jour le prix d'une étape
    public function updateStepPrice(Request $request, $projectId, $stepId)
    {
        $step = ConstructionStep::findOrFail($stepId);
        $step->prix_saisi = $request->input('prix_saisi');
        $step->save();

        return back();
    }

    // Confirmer le paiement d'une étape
    public function confirmStep($projectId, $stepId)
    {
        $step = ConstructionStep::findOrFail($stepId);
        $step->status = 'confirmé'; // Marquer l'étape comme confirmée
        $step->save();

        return back();
    }
}