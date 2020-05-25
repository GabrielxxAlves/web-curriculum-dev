import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skil',
  templateUrl: './skil.component.html'
})
export class SkilComponent implements OnInit {

  labels = [
    '.Net', '.Net Core', '.Net Platform', 'GIT', 'GIT Hub', 'NodeJS', 'Scrum',
    'SQL Server', 'MySQL', 'MongoBD', 'TDD', 'BDD', 'SOLID Principle', 'CQRS Pattern',
    'Docker', 'PHP'
  ];

  constructor() { }

  ngOnInit() {
  }

}
