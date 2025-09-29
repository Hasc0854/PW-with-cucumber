import { setDefaultTimeout, configure, Actor } from '@serenity-js/core';
import { PlaywrightBrowser, LaunchBrowser } from '@serenity-js/playwright';
import { Cast } from './Cast'; 

setDefaultTimeout(60 * 1000); // 60 segundos

configure({
    actors: new Cast({
        Actor: (name) => Actor.named(name).whoCan(
            LaunchBrowser.using(PlaywrightBrowser.chromium(), { 
                headless: true,
                channel: 'chrome' 
            })
        ),
    }),

    // 3. Configuración para generar el reporte de Serenity BDD
    crew: [
        // Aquí puedes agregar el reportero de consola u otros
    ]
});