import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-management-user-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './management-user-page.component.html',
  styleUrl: './management-user-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementUserPageComponent { }
