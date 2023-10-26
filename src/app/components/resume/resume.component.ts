import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  public education = [
    { name: 'Estácio de Sá', description: 'Analysis and systems development' },
    { name: 'CS50, Harvard University', description: 'Introduction to the intellectual enterprises of computer science and the art of programming' },
  ];

  public experience = [
    { name: 'Easy Communication & Technology', location: 'Miami, Flórida, Estados Unidos · Remote', description: 'Upgraded legacy code to Angular 14, introduced new features, utilized Bootstrap and Angular Material for design, followed Gitflow and conventional commits, employed Azure DevOps, and provided international customer support in an Agile Scrum environment..' },
    { name: 'Towers Company', location: 'Rio de Janeiro, Brazil · Remote', description: 'I worked on screen maintenance and creation in Angular 13, managed components, used Bootstrap and Angular Material for design and functionality, and followed Gitflow and conventional commits for effective code management in a project' },
  ];

}
