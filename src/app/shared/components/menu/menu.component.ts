import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

export type MenuItem = {
  label: string;
  routerLink ?: string;
  click ?: (event: MouseEvent) => void;
};
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() items: MenuItem[] = [];

  selectedItemIndex : number | null = null;

  onItemClick(event: MouseEvent, menuItem: MenuItem, itemIndex: number){
    this.selectedItemIndex =
      this.selectedItemIndex !== itemIndex ? itemIndex : null;

    if(menuItem.click) {
      menuItem.click(event);
    }
  }
}
