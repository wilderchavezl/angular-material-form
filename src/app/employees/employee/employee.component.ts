import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../shared/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments = [
    {id: 1, value: 'Dep 1'},
    {id: 2, value: 'Dep 2'},
    {id: 3, value: 'Dep 3'},
  ];

  constructor(private empServ:EmployeeService) { }

  ngOnInit() {
  }

  onClear(){
    this.empServ.form.reset();
    this.empServ.initializeFormGroup();
  }

}
