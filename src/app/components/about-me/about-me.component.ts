import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Popover } from 'bootstrap'

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public myImage!: SafeResourceUrl;
  public goLinkedin: string = 'https://www.linkedin.com/in/felipe-torres-cresto/';
  public goGitHub: string = 'https://github.com/FelipeTC06';
  public downLoadCv: string = './assets/curriculo/CV Felipe Torres En.pdf';
  public readMore: boolean = false;

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }

  public ngOnInit() {
    this.loadImage();
    this.popoOverOnInit();
  }

  private popoOverOnInit() {
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
      .forEach(popoverNode => new Popover(popoverNode))
  }

  private loadImage() {
    this.myImage = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/image-perfil.png');
  }

  public goReadMore() {
    this.readMore = !this.readMore;
  }

}
