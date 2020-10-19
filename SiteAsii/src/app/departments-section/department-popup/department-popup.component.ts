import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentDescriptions } from '../department-descriptions';

@Component({
  selector: 'app-department-popup',
  templateUrl: './department-popup.component.html',
  styleUrls: ['./department-popup.component.scss'],
})
export class DepartmentPopupComponent {
  departmentData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {
    this.departmentData = DepartmentDescriptions[dialogData.department];
  }
}
