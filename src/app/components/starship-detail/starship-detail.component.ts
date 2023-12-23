import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipsService } from '@app/services/starships.service';


@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  starship: any = null;
  imageUrl: string = '';

  constructor(private starshipsService: StarshipsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getStarshipDetails();
  }

  getStarshipDetails(): void {
    const starshipId = this.route.snapshot.paramMap.get('id');
    this.starshipsService.getStarships(`https://swapi.py4e.com/api/starships/${starshipId}/`).subscribe(data => {
      this.starship = data;
      this.imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`;
    });
  }

  closeDetails(): void {
    // Navegar de vuelta al listado
    this.router.navigate(['/starships']);
  }

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
  
}
