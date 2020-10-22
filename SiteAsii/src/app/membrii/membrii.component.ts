import { Component } from '@angular/core';
import { AsiiMember } from './member.model';

@Component({
  selector: 'asii-membrii',
  templateUrl: './membrii.component.html',
  styleUrls: ['./membrii.component.scss']
})
export class MembriiComponent {
  membersArray: AsiiMember[] = [{
    name: 'Some member',
    title: 'Some function',
    photo: '/assets/images/photo-member.jpg',
    facebookLink: 'https://www.facebook.com/',
    instagramLink: 'https://www.instagram.com/',
    linkedInLink: 'https://www.linkedin.com/'
  }];
}
