import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoscliComponent } from './heladoscli.component';

describe('HeladoscliComponent', () => {
  let component: HeladoscliComponent;
  let fixture: ComponentFixture<HeladoscliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeladoscliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladoscliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
