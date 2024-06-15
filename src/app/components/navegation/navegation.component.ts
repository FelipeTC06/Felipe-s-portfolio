import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-navegation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent {

  public logoPath!: SafeResourceUrl;
  public isNavItemsVisible!: boolean;
  public iconClass: string = 'bi bi-justify';


  public menuItems = [
    { label: '', active: true },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    { label: '', active: false },
    // { label: 'Home', active: true },
    // { label: 'About Me', active: false },
    // { label: 'Resume', active: false },
    // { label: 'Skills', active: false },
    // { label: 'Projects', active: false },
  ];

  constructor(private sanitizer: DomSanitizer) { }

  public ngOnInit() {
    this.loadLogo();
  }

  private loadLogo() {
    this.logoPath = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/logo/logoFT.png');
  }


  public setActiveItem(item: any): void {
    this.menuItems.forEach((menuItem) => {
      menuItem.active = menuItem.label === item.label;
    });
  }

  public openMobile() {
    this.isNavItemsVisible = !this.isNavItemsVisible;
    this.iconClass = this.isNavItemsVisible ? 'bi bi-x-lg' : 'bi bi-justify'
  }

}
