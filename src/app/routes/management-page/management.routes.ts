import {Routes} from "@angular/router";
import {ManagementPageComponent} from "./management-page.component";
import {authGuard} from "../../shared/guards/auth.guard";
import {ManagementBrandsPageComponent} from "./management-brands-page/management-brands-page.component";

export const managementRoutes: Routes = [
  {
    path: 'management',
    canActivate: [authGuard], //angular guards
    data: { // route'a özel veri tutma
      requiredRoles: ['admin'],
    },
    component: ManagementPageComponent,
    children: [
      {
        path: 'brands', //management/brands
        component: ManagementBrandsPageComponent,
      },
    ],
  },
];
