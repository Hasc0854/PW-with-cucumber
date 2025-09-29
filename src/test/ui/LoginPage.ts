import { Target } from '@serenity-js/web';

export class LoginPage {
    static readonly UsernameField = Target.the('username field').located('#user-name');
    static readonly PasswordField = Target.the('password field').located('#password');
    static readonly LoginButton = Target.the('login button').located('#login-button');
}