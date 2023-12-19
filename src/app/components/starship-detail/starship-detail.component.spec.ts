import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailComponent } from './starship-detail.component';

describe('StarshipDetailComponent', () => {
  let component: StarshipDetailComponent;
  let fixture: ComponentFixture<StarshipDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipDetailComponent]
    });
    fixture = TestBed.createComponent(StarshipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
