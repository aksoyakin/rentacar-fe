import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../shared/home-layout/home-layout.component';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HomeLayoutComponent
  ],
  template: `

    <app-home-layout>

      <!-- panel gelebilir! -->
      <router-outlet></router-outlet>

      
    </app-home-layout>
  
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementPageComponent { }
