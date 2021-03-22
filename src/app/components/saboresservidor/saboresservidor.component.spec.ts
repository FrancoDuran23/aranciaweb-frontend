import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresservidorComponent } from './saboresservidor.component';

describe('SaboresservidorComponent', () => {
  let component: SaboresservidorComponent;
  let fixture: ComponentFixture<SaboresservidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaboresservidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaboresservidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
