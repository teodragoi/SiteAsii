import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DEPARTMENT_POPUP_CONFIG } from '../department-popup.config';
import { DepartmentPopupComponent } from '../department-popup/department-popup.component';
import { Departments } from '../departments.enum';

@Component({
  selector: 'asii-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  private dialogRef: MatDialogRef<DepartmentPopupComponent>

  get Departments() {
    return Departments;
  }

  constructor(
  private dialogService: MatDialog
  ) { }

  openDepartmentPopup(department: number): void {
    DEPARTMENT_POPUP_CONFIG.data.department = department;
    this.dialogRef = this.dialogService.open(DepartmentPopupComponent, DEPARTMENT_POPUP_CONFIG);
  }

}
