import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { BrandsListMenuComponent } from './features/brands/components/brands-list-menu/brands-list-menu.component';
import { AddBrandFormComponent } from './features/brands/components/add-brand-form/add-brand-form.component';
import { BrandsListTableComponent } from './features/brands/components/brands-list-table/brands-list-table.component';
import { AddModelFormComponent } from './features/models/add-model-form/add-model-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule


],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Quadriga';
  
}
