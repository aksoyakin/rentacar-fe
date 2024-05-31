import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavItem, NavTitle, NavbarComponent } from '../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent {

  navTitle : NavTitle = { text: 'Quadriga Rental', routerLink: '/'}
  navItems : NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: 'mailto:ahmetcetinkaya@tutamail.com' },
    { label: 'Management', link: '/management' },
    { label: 'Brands Management', link: '/management/brands' },
    { label: 'Models Management', link: '/management/models' },
    { label: 'Cars Management', link: '/management/cars' },
  ];
 }
