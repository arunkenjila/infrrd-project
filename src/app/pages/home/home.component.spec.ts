import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { By } from "@angular/platform-browser";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Book a struggle-free meeting like a pro'`, () => {
    const titleSpan = fixture.debugElement.query(By.css(".home-text"));
    expect(titleSpan.nativeElement.innerText).toEqual(
      "Book a struggle-free meeting like a pro"
    );
  });

  it(`should have a button with title 'BOOK'`, () => {
    const titleSpan = fixture.debugElement.query(By.css("button"));
    expect(titleSpan.nativeElement.innerText).toEqual("BOOK");
  });

  it("should call method gotoBooking", () => {
    const submitButton = fixture.debugElement.query(By.css("button"));

    spyOn(component, "gotoBooking");

    submitButton.nativeElement.click();
    expect(component.gotoBooking).toHaveBeenCalled();
  });
});
