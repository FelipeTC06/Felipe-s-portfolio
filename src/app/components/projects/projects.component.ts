import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public projects = [
    { name: 'FONTE Limpa Energy', icon: 'devicon-wordpress-plain', url: 'https://fontelimpaenergy.com/', img: './assets/images/LogoFonteLimpaEnergy.png' },
    { name: 'Oficina do Saber', icon: 'devicon-wordpress-plain', url: 'https://psicoficinadosaber.com/', img: './assets/images/OficinaDoSaber.png'},
    { name: 'My Portifólio', icon: 'devicon-angularjs-plain', url: 'https://felipedevwork.netlify.app/', img: './assets/images/logo/FTLogo.png' },
    { name: 'Sem Frescura App', icon: 'devicon-figma-plain', url: 'https://www.figma.com/file/19WjrIJ0sk2PX21L1GodBy/Delivery-Sem-Frescura?type=design&node-id=0%3A1&mode=design&t=vxmH1tSm7vphZxkw-1', img: './assets/images/SemFrescuraLogo.png' },
  ];

}
