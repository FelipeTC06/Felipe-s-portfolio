import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {
  
  public background!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }

  public ngOnInit() {
    this.loadBackgroundImage();
  }

  private loadBackgroundImage() {
    this.background = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/headline-background.jpg');
  }

}
