import { Routes } from '@angular/router';
import {HomePageComponent} from "./routes/home-page/home-page.component";
import {managementRoutes} from "./routes/management-page/management.routes";
import {NotFoundPageComponent} from "./routes/not-found-page/not-found-page.component";
import {homeRoutes} from "./routes/home-page/home.routes";

export const routes: Routes = [
  ...homeRoutes,
  ...managementRoutes,
  {
    path: '**',
    component: NotFoundPageComponent
  },
];
