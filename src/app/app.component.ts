import { Component } from '@angular/core';

import { AccountService } from './services';
import { User } from './_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'starwars';
  user?: User | null;
  userFirstName: string | null = null; // Para saludar al usuario al inciciar sesión

  constructor(private accountService: AccountService, private router: Router) {
    this.accountService.user.subscribe(user => {
      this.user = user;
      // Actualizar el nombre del usuario después de iniciar sesión
      this.userFirstName = user?.firstName || null;
    });
  }

    logout() {
        this.accountService.logout();
        this.router.navigate(['/']);  // Redirige a la página de inicio después de cerrar sesión
    }

    toggleLogin() {
      if (this.user) {
        this.logout();
      } else {
        this.router.navigate(['/account/login']);
      }
    }

    // Método para obtener el nombre del usuario
    getUserName(): string | null {
      return this.userFirstName;
  }
}
