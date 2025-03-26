<?php


// namespace App\Http\Controllers;

// use App\Models\Contact;
// use Illuminate\Http\Request;

// class ContactController extends Controller
// {
//     public function store(Request $request)
//     {
//         // Validation des données du formulaire
//         $validated = $request->validate([
//             'name' => 'required|string|max:255',
//             'email' => 'required|email|max:255',
//             'message' => 'required|string|max:5000',
//         ]);
    
//         // Enregistrer dans la base de données
//         Contact::create([
//             'name' => $validated['name'],
//             'email' => $validated['email'],
//             'message' => $validated['message'],
//         ]);
    
//         // Retourner une réponse de succès avec un message flash
//         return redirect()->route('contact')->with('flash', ['success' => 'Votre message a été envoyé avec succès !']);
//     }
    
// }



namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;



class ContactController extends Controller
{
    // Méthode pour enregistrer les données du formulaire de contact
    public function store(Request $request)
    {
        // Validation des données du formulaire
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000',
        ]);

        // Enregistrer dans la base de données
        Contact::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'message' => $validated['message'],
        ]);

        return redirect()->route('contact')->with('flash', ['message' => 'Your message was sent successfully!']);
    }
}