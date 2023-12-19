import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipListComponent } from './starship-list.component';

describe('StarshipListComponent', () => {
  let component: StarshipListComponent;
  let fixture: ComponentFixture<StarshipListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipListComponent]
    });
    fixture = TestBed.createComponent(StarshipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
