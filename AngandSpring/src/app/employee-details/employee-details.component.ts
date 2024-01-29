import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})

export class EmployeeDetailsComponent {
  id!: number;
  employees!: Employee[];
  employee: Employee = new Employee();
constructor(private employeeService: EmployeeService,
  private route: ActivatedRoute,
  private router: Router) {}

  ngOnInit() 
  {
   this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{ this.employee = data;
  }, error => console.log(error));
  

}
}
