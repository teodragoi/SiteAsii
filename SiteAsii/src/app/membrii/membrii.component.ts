import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membrii',
  templateUrl: './membrii.component.html',
  styleUrls: ['./membrii.component.scss']
})
export class MembriiComponent implements OnInit {
  membri =  ['First', 'Second', 'Third', '1' , '2', '','First', 'Second', 'Third', '1' , '2', '','First', 'Second', 'Third', '1'];
  constructor() { }

  ngOnInit(): void {
  }

}
