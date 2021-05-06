import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciaComponent } from './ganancia.component';

describe('GananciaComponent', () => {
  let component: GananciaComponent;
  let fixture: ComponentFixture<GananciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GananciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GananciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
