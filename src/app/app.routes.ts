import { Routes } from '@angular/router';
import { managementRoutes } from './routes/management-page/management.routes';
import { homeRoutes } from './routes/home-page/home.routes';


export const routes: Routes = [
  ...managementRoutes,
   ...homeRoutes,
/*  
  ...aboutRoutes,
  ...loginRoutes,
  ...signupRoutes,
  {
    path: '', //path: '**'  -> wildwcards
    component: NotFoundPageComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {path: 'dashboard', 
      component: AdminDashboardComponent,
      }
    ]
  },
  {
    path:'customer',
    component:CustomerComponent,
    children:[
      {path: 'dashboard', 
      component: CustomerDashboardComponent,
      }
    ]
  }, */

];
