import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  scroll: boolean = false;

  //Cambiar color header, al hacer scroll
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.pageYOffset > 0) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }
}
