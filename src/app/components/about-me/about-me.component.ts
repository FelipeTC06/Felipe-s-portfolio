import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public myImage!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }

  public ngOnInit() {
    this.loadImage();
  }

  private loadImage() {
    this.myImage = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/image-perfil.png');
  }
}
