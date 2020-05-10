import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }
  selectedDepartment = '';

  selectChangeHandler(event: any) {
    this.selectedDepartment = event.target.value;
  }
  ngOnInit(): void {
  }

}
