import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HomeLayoutComponent} from "../../shared/layouts/home-layout/home-layout.component";
import {ButtonComponent} from "../../shared/components/button/button.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ButtonComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
