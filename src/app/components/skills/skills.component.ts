import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public softWareSkills = [
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'BOOTSTRAP', icon: 'devicon-bootstrap-plain' },
    { name: 'ANGULAR MATERIAL', icon: 'bi bi-forward' },
    { name: 'JAVASCRIPT', icon: 'devicon-javascript-plain' },
    { name: 'JQUERY', icon: 'devicon-jquery-plain' },
    { name: 'TYPESCRIPT', icon: 'devicon-typescript-plain' },
    { name: 'ANGULAR +2', icon: 'devicon-angularjs-plain' },
    { name: 'NESTJS', icon: 'devicon-nestjs-plain' },
    { name: 'GIT / GITHUNB', icon: 'devicon-git-plain' },
    { name: 'WORDPRESS', icon: 'devicon-wordpress-plain' },
    { name: 'DEVOPS', icon: 'bi bi-forward' },
    { name: 'SCRUM', icon: 'bi bi-forward' },
  ]

  public languages = [
    { name: 'PORTUGUESE', level: 'NATIVE', icon: '' },
    { name: 'ENGLISH', level: 'B2', icon: '' },
    { name: 'FRENCH', level: 'B2', icon: '' },
  ];
}
