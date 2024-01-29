import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private router: Router ){
    
  }
  employee: Employee = new Employee();
  createEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
console.log(data);
this. goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList(){
this.router.navigate(['/employees']);
  }
onSubmit() {
// console.log(this.employee);

this.createEmployee();

}
  ngOnInit(): void {
   
  }
  

}
