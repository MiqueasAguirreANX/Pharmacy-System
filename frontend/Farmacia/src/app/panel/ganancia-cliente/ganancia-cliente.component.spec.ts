import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciaClienteComponent } from './ganancia-cliente.component';

describe('GananciaClienteComponent', () => {
  let component: GananciaClienteComponent;
  let fixture: ComponentFixture<GananciaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GananciaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GananciaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
