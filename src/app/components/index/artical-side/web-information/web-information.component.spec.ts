import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInformationComponent } from './web-information.component';

describe('WebInformationComponent', () => {
  let component: WebInformationComponent;
  let fixture: ComponentFixture<WebInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
