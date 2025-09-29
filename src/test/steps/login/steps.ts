
import { Given, Then, When } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { Login } from 'src/test/taks/Login';
When('I log in as a standard user', () => 
    actorCalled('The User').attemptsTo(
        Login.asAStandardUser() 
    )
);