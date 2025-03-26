<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Verification
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
      // Vérifie si l'utilisateur est un admin
      if (auth()->check() && auth()->user()->role === 'admin') {
        return $next($request);
    }

    // Redirige vers une page différente si l'utilisateur n'est pas un admin
    return redirect('/client/dashboard');
    }
}
