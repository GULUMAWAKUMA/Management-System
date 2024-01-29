import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
}) 

export class EmployeeListComponent implements OnInit{

employees!: Employee[];

constructor(private employeeService: EmployeeService,
  private router: Router){
 
}
ngOnInit():void{
this.getEmployees();
} 
private getEmployees(){
  this.employeeService.getEmployeeList().subscribe(data => this.employees = data);
}

updateEmployee(id: number){
this.router.navigate(['update-employee', id]);
}
deleteEmployee(id: number) {
  this.employeeService.deleteEmployee(id).subscribe(data =>{
     
  });
 this.getEmployees();
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
      }
  detailEmployee(id: number) {
    this.router.navigate(['employee-detail', id]);
    }
}
