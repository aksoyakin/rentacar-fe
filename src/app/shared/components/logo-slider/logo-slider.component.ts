import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';




@Component({
  selector: 'app-logo-slider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './logo-slider.component.html',
  styleUrl: './logo-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoSliderComponent {
  
  


 }
 
