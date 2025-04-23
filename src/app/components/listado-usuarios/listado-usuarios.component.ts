import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.service';
import { UsuarioCardComponent } from "../usuario-card/usuario-card.component";

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
  imports: [UsuarioCardComponent]
})
export class ListadoUsuariosComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => console.error('Error fetching users:', error)
    );
  }
}
