import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborescliComponent } from './saborescli.component';

describe('SaborescliComponent', () => {
  let component: SaborescliComponent;
  let fixture: ComponentFixture<SaborescliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaborescliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaborescliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
