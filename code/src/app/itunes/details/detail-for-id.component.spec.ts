import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForIdComponent } from './detail-for-id.component';

describe('DetailForIdComponent', () => {
  let component: DetailForIdComponent;
  let fixture: ComponentFixture<DetailForIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailForIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailForIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
