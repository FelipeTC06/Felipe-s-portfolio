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
    { name: 'Bradesco Bank', location: 'Miami, Flórida, Estados Unidos · Remote', description: 'As a Fullstack developer at BBDesk Project, I am responsible for frontend development, actively collaborating with the backend. We use Angular 11 and Bootstrap to create a user-friendly and responsive interface, while on the backend, we employ Node.js, Express.js, and Prisma to ensure efficient database connectivity. In addition to development, I have taken on a leadership role as the developer in charge of the project, organizing the team to optimize efficiency and smoothness in the development process. Throughout the project, we integrated external APIs, implemented reactive forms, successfully integrated the database, and created responsive interfaces to ensure a consistent and effective user experience. This experience has provided me with a broad set of skills, ranging from technical development to effective team management to achieve project goals.' },
    { name: 'Easy Communication & Technology', location: 'Miami, Flórida, Estados Unidos · Remote', description: 'Frontend developer on the "Easy Builder" project, where I participated in refactoring the project from AngularJS to Angular 13. This allowed me to acquire skills in working with Angular and dealing with large-scale projects. Additionally, I was able to collaborate with a highly qualified team, which allowed me to learn even more about software development and working as a team.' },
    { name: 'Towers Company', location: 'Rio de Janeiro, Brazil · Remote', description: 'I worked on a project that involved screen maintenance and creation using Angular 13, as well as creating and maintaining components with Angular. I utilized Bootstrap and Angular Material to enhance the design and functionality of the application. To manage the code, I followed the Gitflow methodology and used conventional commits. These code versioning practices ensured that the code was managed efficiently and that the history of changes was easily traceable.' },
  ];

}
