import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallTripsComponent } from './showall-trips.component';

describe('ShowallTripsComponent', () => {
  let component: ShowallTripsComponent;
  let fixture: ComponentFixture<ShowallTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowallTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
