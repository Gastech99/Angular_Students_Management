import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit, AfterViewInit {
  public srudents: any;
  public dataSource: any;
  public displayedColumns = ["id", "firstName", "lastName", "payments"]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router){

  }
  ngOnInit(): void {
    this.srudents = [];
    for (let i: number = 0; i < 100; i++) {
      this.srudents.push(
        {
          id: i,
          firstName: Math.random().toString(20),
          lastName: Math.random().toString(20)
        }
      )
    }
    this.dataSource = new MatTableDataSource(this.srudents);
  }
  // Liaison entre la dataSource et la pagination
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchStudent(event: Event): void{
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  getPayments(srudent: any): void{
    this.router.navigateByUrl("/admin/payments");
  }
}
