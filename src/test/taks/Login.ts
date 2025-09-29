
import { Task } from '@serenity-js/core';
import { Enter, Click, page } from '@serenity-js/web';
import { LoginPage } from '../ui/LoginPage'; // Tus Page Objects se convierten en Locators

export const Login = {
    asAStandardUser: () => Task.where('#actor logs in as a standard user',
        Enter.theValue('standard_user').into(LoginPage.UsernameField),
        Enter.theValue('secret_sauce').into(LoginPage.PasswordField),
        Click.on(LoginPage.LoginButton)
    )
}