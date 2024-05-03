import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HomeLayoutComponent} from "../../shared/layouts/home-layout/home-layout.component";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {BrandsListMenuComponent} from "../../features/brands/components/brands-list-menu/brands-list-menu.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ButtonComponent,
    BrandsListMenuComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
