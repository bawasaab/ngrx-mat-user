import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, firstName: 'Hydrogen', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 2, firstName: 'Helium', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 3, firstName: 'Lithium', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 4, firstName: 'Beryllium', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 5, firstName: 'Boron', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 6, firstName: 'Carbon', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 7, firstName: 'Nitrogen', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 8, firstName: 'Oxygen', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 9, firstName: 'Fluorine', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
  {id: 10, firstName: 'Neon', lastName: 'Bawa', email: 'bawa_d@yopmail.com'},
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(id: number) {
    console.log('id', id)
  }

}
