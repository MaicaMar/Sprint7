import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarshipsService } from '@app/services/starships.service';



@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  starships: any[] = [];
  nextPage: string = '';

  constructor(private starshipsService: StarshipsService, private router: Router) { }

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(): void {
    this.starshipsService.getStarships().subscribe(data => {
      this.starships = data.results;
      this.nextPage = data.next;
    });
  }

  loadMore(): void {
    if (this.nextPage) {
      this.starshipsService.getStarships(this.nextPage).subscribe(data => {
        this.starships = this.starships.concat(data.results);
        this.nextPage = data.next;
      });
    }
  }

  navigateToDetails(url: string): void {
    const starshipId = this.extractStarshipIdFromUrl(url);
    this.router.navigate(['/starships', starshipId]);
  }

  private extractStarshipIdFromUrl(url: string): string {
    // Dividir la URL por '/'
    const parts = url.split('/');

    // Obtener el penúltimo elemento, que es el ID
    const starshipId = parts[parts.length - 2];

    return starshipId;
  }

  showDetails = false; // Controla si se debe mostrar la vista de detalles

  // Función para mostrar la vista de detalles
  showDetailsView(): void {
    this.showDetails = true;
  }

  // Función para cerrar la vista de detalles
  closeDetailsView(): void {
    this.showDetails = false;
  }
}
