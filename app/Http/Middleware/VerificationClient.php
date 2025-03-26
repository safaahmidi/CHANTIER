<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerificationClient
{
    public function handle(Request $request, Closure $next): Response
    {
        // Vérifie si l'utilisateur est connecté et a le rôle "client"
        if (auth()->check() && auth()->user()->role === 'client') {
            return $next($request);
        }

        // Redirige vers le tableau de bord admin si l'utilisateur n'est pas un client
        return redirect()->route('dashboard');
    }
}