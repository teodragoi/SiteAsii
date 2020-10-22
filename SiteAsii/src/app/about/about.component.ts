import { Component } from '@angular/core';
import { About } from '../../assets/text-resources';

@Component({
  selector: 'asii-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  AboutResource = About;

  redirectToLink(elementId: string): void {
    const element = document.getElementById(elementId);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
