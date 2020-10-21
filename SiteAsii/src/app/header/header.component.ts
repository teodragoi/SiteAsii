import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'asii-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  redirectToLink(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
