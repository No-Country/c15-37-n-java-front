import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTurnosComponent } from './btn-turnos.component';
import { By } from '@angular/platform-browser';

describe('BtnTurnosComponent', () => {
  let component: BtnTurnosComponent;
  let fixture: ComponentFixture<BtnTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTurnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct HTML", () => {
    component.texto = "Hola";
    fixture.detectChanges();

    const button = fixture.debugElement.queryAll(By.css("button"))[0];
    expect(button.nativeElement.textContent).toBe("Hola");
  });
});
