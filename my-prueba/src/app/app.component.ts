import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SectionBodyComponent } from './section-body/section-body.component';
import { FooterComponent } from './footer/footer.component';
import { Section2BannerComponent } from './section2-banner/section2-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,BodyComponent,SectionBodyComponent,FooterComponent,Section2BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-prueba';
}
