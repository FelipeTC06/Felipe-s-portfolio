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

  
  public menuItems = [
    { label: 'Home', active: true },
    { label: 'About Me', active: false },
    { label: 'Resume', active: false },
    { label: 'Skills', active: false },
    { label: 'Projects', active: false },
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

}
