import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosservidorComponent } from './heladosservidor.component';

describe('HeladosservidorComponent', () => {
  let component: HeladosservidorComponent;
  let fixture: ComponentFixture<HeladosservidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeladosservidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladosservidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
