import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-department-popup',
  templateUrl: './department-popup.component.html',
  styleUrls: ['./department-popup.component.scss'],
})
export class DepartmentPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {
    console.log(dialogData);
  }
}
