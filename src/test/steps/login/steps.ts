

import { actorCalled } from '@serenity-js/core';
import { When } from '@serenity-js/cucumber'
import { Login } from 'src/test/taks/login';
When('I log in as a standard user', () => 
    actorCalled('The User').attemptsTo(
        Login.asAStandardUser() 
    )
);