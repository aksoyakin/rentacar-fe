import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandsListBaseComponent } from '../brands-list-base/brands-list-base.component';
import { MenuComponent, MenuItem } from '../../../../shared/components/menu/menu.component';

@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent
  ],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListMenuComponent extends BrandsListBaseComponent {

  get brandsMenuItem(): MenuItem[] {
    console.log(this.brands);

    return (
      this.brands?.map((brand) => {
        return {
          label: brand.name!, // ' ! ' : null olmayan bir değer olduğunu belirtir.
          click: (_: MouseEvent) => this.onSelectBrand(brand),
        };
      }) ?? []
    );
  }

 }
