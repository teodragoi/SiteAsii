import { Component, Input } from '@angular/core';
import { AsiiMember } from '../member.model';

@Component({
  selector: 'asii-member-tile',
  templateUrl: './member-tile.component.html',
  styleUrls: ['./member-tile.component.scss']
})
export class MemberTileComponent {
  @Input() member: AsiiMember;

  goToLink(link: string): void {
    window.open(link, '_blank');
  }
}
