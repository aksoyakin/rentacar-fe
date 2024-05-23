import { Routes } from '@angular/router';
import {HomePageComponent} from "./routes/home-page/home-page.component";
import {managementRoutes} from "./routes/management-page/management.routes";
import {NotFoundPageComponent} from "./routes/not-found-page/not-found-page.component";
import {homeRoutes} from "./routes/home-page/home.routes";
import { aboutRoutes } from './routes/about-page/about-routes';
import { loginRoutes } from './auth/components/login-page/login.routes';
import { signupRoutes } from './auth/components/signup-page/signup.routes';

export const routes: Routes = [
  ...homeRoutes,
  ...managementRoutes,
  ...aboutRoutes,
  ...loginRoutes,
  ...signupRoutes,


  {
    path: '', //path: '**'  -> wildwcards
    component: NotFoundPageComponent
  },

];
