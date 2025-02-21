import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunesComponent } from './itunes.component';

describe('ItunesComponent', () => {
  let component: ItunesComponent;
  let fixture: ComponentFixture<ItunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItunesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
