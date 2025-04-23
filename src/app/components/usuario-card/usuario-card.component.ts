import { Component, Input } from '@angular/core';
import { User } from '../../model/user.service';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent {
  @Input() user!: User;
}
