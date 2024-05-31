import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTable]',
  standalone: true,
})
export class TableDirective {
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLTableElement).classList.add('table');

  }
 }
