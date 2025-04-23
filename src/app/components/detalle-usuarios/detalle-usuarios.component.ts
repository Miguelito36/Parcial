import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User, Post } from '../../model/user.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  user!: User;
  showCompanyInfo = false;
  posts: Post[] = [];
  showPosts = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(+id).subscribe(
        user => this.user = user,
        error => console.error('Error fetching user:', error)
      );
    }
  }

  toggleCompanyInfo(): void {
    this.showCompanyInfo = !this.showCompanyInfo;
  }

  loadPosts(): void {
    if (this.user && !this.posts.length) {
      this.userService.getUserPosts(this.user.id).subscribe(
        posts => {
          this.posts = posts;
          this.showPosts = true;
        },
        error => console.error('Error fetching posts:', error)
      );
    } else {
      this.showPosts = !this.showPosts;
    }
  }
}
