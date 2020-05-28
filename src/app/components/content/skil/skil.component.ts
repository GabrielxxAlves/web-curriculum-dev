import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skil',
  templateUrl: './skil.component.html'
})
export class SkilComponent implements OnInit {

  runTimes = ['.Net Platform ', ' .Net Core',  ' NodeJS'];
  frameworks = ['React', ' AngularJS', ' React-Native', ' Flutter'];
  languages = ['C#', ' JavaScript', ' TypeScript', ' PHP', ' Dart', ' Python'];
  bds = ['SQL Server', ' MySQL', ' MongoBD'];
  pattern = ['TDD', ' BDD', ' DDD', ' SOLID Principle', ' CQRS Pattern', ' SMACSS'];
  add = ['Git', ' Scrum', ' Docker', 'HTML', 'CSS'];

  labels = {
    runTimes: this.runTimes,
    frameworks: this.frameworks,
    languages: this.languages,
    bds: this.bds,
    pattern: this.pattern,
    add: this.add
  };

  constructor() { }

  ngOnInit() {
  }

}
