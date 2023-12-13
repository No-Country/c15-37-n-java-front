import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBarComponent } from './link-bar.component';
import { By } from '@angular/platform-browser';

describe('LinkBarComponent', () => {
  let component: LinkBarComponent;
  let fixture: ComponentFixture<LinkBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should contains 3 elements", () => {
    expect(component.links.length).toBe(3);
  });
  
  it("should render the correct HTML", () => {
    const elements = fixture.debugElement.queryAll(By.css("a"));
    expect(elements.length).toBe(3);

    const firstElement = elements[0];
    expect(firstElement.nativeElement.href).toBe("http://localhost:9876/#nosotros");
    expect(firstElement.nativeElement.textContent).toContain("nosotros");

    const secondElement = elements[1];
    expect(secondElement.nativeElement.href).toBe("http://localhost:9876/#servicio");
    expect(secondElement.nativeElement.textContent).toContain("servicio");

    const thirdElement = elements[2];
    expect(thirdElement.nativeElement.href).toBe("http://localhost:9876/#contacto");
    expect(thirdElement.nativeElement.textContent).toContain("contacto");

  });
});
