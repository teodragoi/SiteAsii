import { Component } from '@angular/core';

@Component({
  selector: 'asii-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public images: { path }[] = [
    { path: '../../assets/projects/GETA2.png' },
    { path: '../../assets/projects/BB2.png' },
    { path: '../../assets/projects/CraciunInima2.png' }
  ];

  constructor() {
    console.log(this.images);
  }
}
