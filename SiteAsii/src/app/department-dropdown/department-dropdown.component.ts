import { Component } from '@angular/core';

@Component({
  selector: 'asii-department-dropdown',
  templateUrl: './department-dropdown.component.html',
  styleUrls: ['./department-dropdown.component.scss'],
})
export class DepartmentDropdownComponent {
  departmentsList: { display; value }[] = [
    {
      display: 'Staff',
      value: 'staff',
    },
    {
      display: 'Relatii Externe',
      value: 're',
    },
    {
      display: 'Relatii Interne',
      value: 'ri',
    },
    {
      display: 'PR&Media',
      value: 'prm',
    },
    {
      display: 'IT',
      value: 'it',
    },
    {
      display: 'Proiecte',
      value: 'pro',
    },
    {
      display: 'Evaluari',
      value: 'evaluari',
    },
  ];

  departmentSelected(event: any) {
    console.log(event.value);
  }
}
