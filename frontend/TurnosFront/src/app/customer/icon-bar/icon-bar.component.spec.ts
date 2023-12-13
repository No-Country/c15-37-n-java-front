import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBarComponent } from './icon-bar.component';
import { By } from '@angular/platform-browser';

describe('IconBarComponent', () => {
  let component: IconBarComponent;
  let fixture: ComponentFixture<IconBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBarComponent);
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
    expect(firstElement.nativeElement.href).toBe("http://www.twitter.com/");
    

    const secondElement = elements[1];
    expect(secondElement.nativeElement.href).toBe("http://www.facebook.com/");
    

    const thirdElement = elements[2];
    expect(thirdElement.nativeElement.href).toBe("http://www.instagram.com/");
    
    const images = fixture.debugElement.queryAll(By.css("img"));

    expect(images[0].nativeElement.src).toBe("http://localhost:9876/twitter.jpg");

    expect(images[1].nativeElement.src).toBe("http://localhost:9876/facebook.jpg");

    expect(images[2].nativeElement.src).toBe("http://localhost:9876/instagram.jpg");

  });
});
