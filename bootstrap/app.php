<?php
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Environments;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Middleware de sesión
        $middleware->web([
            \Illuminate\Session\Middleware\StartSession::class,
        ]);
    })
    ->withExceptions(function ($exceptions) {
        //
    })->create();