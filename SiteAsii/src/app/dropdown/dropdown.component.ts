import { Component } from '@angular/core';

@Component({
  selector: 'asii-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
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
