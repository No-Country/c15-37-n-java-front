import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosPanelComponent } from './turnos-panel.component';

describe('TurnosPanelComponent', () => {
  let component: TurnosPanelComponent;
  let fixture: ComponentFixture<TurnosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnosPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
