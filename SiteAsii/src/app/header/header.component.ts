import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'asii-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    document.querySelector('.header-bar').classList.remove('scrolled');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollOffset <= 500) {
      document.querySelector('.header-bar').classList.remove('scrolled');
    } else {
      document.querySelector('.header-bar').classList.add('scrolled');
    }
  }

  redirectToLink(elementId: string): void {
    const element = document.getElementById(elementId);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
