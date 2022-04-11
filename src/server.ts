
import App from './app';
import 'dotenv/config';

import AuthenticationController from './api/authentication/authentication.controller';
import UserController from './api/user/user.controller';
import validateEnv from './api/utils/validateEnv';

validateEnv();
const app = new App(
    [
        new AuthenticationController(),
        new UserController()
    ]
);

app.listen();
