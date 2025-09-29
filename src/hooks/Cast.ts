import { Cast as SerenityCast, Actor } from '@serenity-js/core'; 
import { PlaywrightBrowser, LaunchBrowser } from '@serenity-js/playwright';
import { CallAnApi } from '@serenity-js/rest';


export class Cast extends SerenityCast { 
    
    constructor(
        private readonly options: { headless: boolean } = { headless: true }
    ) {
        super();
    }
    prepare(actor: Actor): Actor {
        if (! actor.abilityTo(PlaywrightBrowser)) {
            actor.whoCan(
                LaunchBrowser.using(PlaywrightBrowser.chromium(), { 
                    headless: this.options.headless 
                })
            );
        }

        if (! actor.abilityTo(CallAnApi)) {
             actor.whoCan(
                 CallAnApi.at('https://api.example.com/')
             );
        }

 
        return actor;
    }
}
