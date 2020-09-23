import { Component, OnInit } from '@angular/core';
import { About } from '../../assets/text-resources';

@Component({
  selector: 'asii-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  AboutResource = About;

  constructor() { }

  ngOnInit(): void {
  }

}
