import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'address'];
  dataSource = [
    { name: 'John Doe', age: 25, address: '123 Main St' },
    { name: 'Jane Smith', age: 30, address: '456 Oak St' },
    { name: 'Mike Johnson', age: 35, address: '789 Pine St' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
