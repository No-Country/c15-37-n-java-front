import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioTipoComponent } from './servicio-tipo.component';

describe('ServicioTipoComponent', () => {
  let component: ServicioTipoComponent;
  let fixture: ComponentFixture<ServicioTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
