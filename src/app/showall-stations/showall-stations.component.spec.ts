import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallStationsComponent } from './showall-stations.component';

describe('ShowallStationsComponent', () => {
  let component: ShowallStationsComponent;
  let fixture: ComponentFixture<ShowallStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowallStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
