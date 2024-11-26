import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { By } from "@angular/platform-browser";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Meet pro'`, () => {
    const titleSpan = fixture.debugElement.query(By.css(".header-left"));
    expect(titleSpan.nativeElement.innerText).toEqual("Meet Pro");
  });
});
