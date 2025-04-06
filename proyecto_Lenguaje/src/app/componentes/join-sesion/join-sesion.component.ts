import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-join-sesion',
  imports: [TopBarComponent,RouterOutlet],
  templateUrl: './join-sesion.component.html',
  styleUrl: './join-sesion.component.css'
})
export class JoinSesionComponent {

}
