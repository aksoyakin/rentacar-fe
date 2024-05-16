import { Routes } from '@angular/router';
import {HomePageComponent} from "./routes/home-page/home-page.component";
import {managementRoutes} from "./routes/management-page/management.routes";
import {NotFoundPageComponent} from "./routes/not-found-page/not-found-page.component";
import {homeRoutes} from "./routes/home-page/home.routes";
import { aboutRoutes } from './routes/about-page/about-routes';
import { loginRoutes } from './routes/login-page/login.routes';

export const routes: Routes = [
  ...homeRoutes,
  ...managementRoutes,
  ...aboutRoutes,
  ...loginRoutes,

  {
    path: '', //path: '**'  -> wildwcards
    component: NotFoundPageComponent
  },

];
