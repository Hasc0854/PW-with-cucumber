import { setDefaultTimeout, configure, Actor } from '@serenity-js/core';
import { PlaywrightBrowser, LaunchBrowser } from '@serenity-js/playwright';
import { Cast } from './Cast'; // Usaremos una clase Cast personalizada

// Configura el tiempo de espera predeterminado para todos los pasos
setDefaultTimeout(60 * 1000); // 60 segundos

configure({
    // 1. Define el "elenco" de actores
    actors: new Cast({
        // 2. Cada Actor puede usar la Habilidad de Navegar la Web (con Playwright)
        Actor: (name) => Actor.named(name).whoCan(
            LaunchBrowser.using(PlaywrightBrowser.chromium(), { 
                // Playwright options:
                headless: true,
                channel: 'chrome' // o 'msedge', 'firefox' si lo deseas
            })
        ),
    }),

    // 3. Configuración para generar el reporte de Serenity BDD
    crew: [
        // Aquí puedes agregar el reportero de consola u otros
    ]
});