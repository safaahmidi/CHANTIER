<?php

// namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
// use Illuminate\Database\Seeder;

// class SecurityMeasureSeeder extends Seeder
// {
//     /**
//      * Run the database seeds.
//      */
//     public function run(): void
//     {
//         //
//     }
// }

// namespace Database\Seeders;

// use App\Models\SecurityMeasure;
// use App\Models\Project;
// use App\Models\User; // Importer le modèle User
// use Illuminate\Database\Seeder;

// class SecurityMeasureSeeder extends Seeder
// {
//     public function run()
//     {
//         // Vérifiez si un projet avec l'ID 1 existe, sinon créez-le
//         $project = Project::find(1);

//         if (!$project) {
//             // Créer un utilisateur si nécessaire (si la colonne 'user_id' est obligatoire)
//             $user = User::firstOrCreate([
//                 'email' => 'user@example.com',  // Un email unique
//             ], [
//                 'name' => 'John Doe',
//                 'password' => bcrypt('password') // Mot de passe par défaut
//             ]);

//             // Créer le projet avec un utilisateur associé
//             $project = Project::create([
//                 'name' => 'Projet Test',
//                 'description' => 'Ceci est un projet de test pour les mesures de sécurité.',
//                 'user_id' => $user->id, // Associer un utilisateur au projet
//             ]);
//         }

//         // Définir les mesures à insérer dans la table 'security_measures'
//         $measures = [
//             'epi' => [
//                 ['name' => 'Casque de sécurité'],
//                 ['name' => 'Gants de protection'],
//                 ['name' => 'Chaussures de sécurité'],
//                 ['name' => 'Lunettes de sécurité'],
//                 ['name' => 'Masque de soudage'],
//                 ['name' => 'Bouchons d\'oreilles'],
//                 ['name' => 'Casque antibruit'],
//                 ['name' => 'Masque anti-poussière (FFP2)'],
//                 ['name' => 'Gants anti-chimiques'],
//                 ['name' => 'Bottes de sécurité imperméables'],
//                 ['name' => 'Vêtements haute visibilité'],
//                 ['name' => 'Harnais de sécurité'],
//                 ['name' => 'Cagoule anti-froid'],
//             ],
//             'prevention' => [
//                 ['name' => 'Formation à la sécurité'],
//                 ['name' => 'Signalisation des zones dangereuses'],
//                 ['name' => 'Inspection quotidienne des équipements'],
//                 ['name' => 'Plan de prévention des risques'],
//                 ['name' => 'Briefings de sécurité (toolbox talks)'],
//                 ['name' => 'Protection des bords de tranchées'],
//                 ['name' => 'Éclairage adéquat des zones de travail'],
//                 ['name' => 'Protection contre les chutes de hauteur'],
//                 ['name' => 'Contrôle des accès aux zones à risque'],
//                 ['name' => 'Protection contre les risques électriques'],
//                 ['name' => 'Étiquetage des produits chimiques'],
//                 ['name' => 'Protection contre les incendies'],
//             ],
//             'secours' => [
//                 ['name' => 'Trousse de premiers soins'],
//                 ['name' => 'Numéro d\'urgence affiché'],
//                 ['name' => 'Extincteurs en bon état et accessibles'],
//                 ['name' => 'Poste de secours désigné'],
//                 ['name' => 'Plan d\'évacuation en cas d\'urgence'],
//                 ['name' => 'Personnel formé aux premiers secours'],
//                 ['name' => 'Défibrillateur accessible'],
//                 ['name' => 'Points de rassemblement identifiés'],
//                 ['name' => 'Alarme incendie fonctionnelle'],
//                 ['name' => 'Kit de déversement chimique'],
//                 ['name' => 'Véhicule de secours disponible'],
//                 ['name' => 'Coordination avec les services d\'urgence locaux'],
//             ],
//         ];

//         // Insérer les mesures de sécurité dans la table 'security_measures'
//         foreach ($measures as $category => $items) {
//             foreach ($items as $item) {
//                 SecurityMeasure::create([
//                     'project_id' => $project->id,  // Utiliser l'ID du projet existant
//                     'category' => $category,
//                     'name' => $item['name'],
//                     'applied' => false,  // Par défaut, non appliqué
//                 ]);
//             }
//         }
//     }
// }
