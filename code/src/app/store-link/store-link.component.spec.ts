import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLinkComponent } from './store-link.component';

describe('StoreLinkComponent', () => {
  let component: StoreLinkComponent;
  let fixture: ComponentFixture<StoreLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
