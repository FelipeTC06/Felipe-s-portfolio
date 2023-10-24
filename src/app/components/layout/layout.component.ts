import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { NavegationComponent } from "../navegation/navegation.component";
import { HeadlineComponent } from "../headline/headline.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [CommonModule, FooterComponent, NavegationComponent, HeadlineComponent]
})
export class LayoutComponent {

}
