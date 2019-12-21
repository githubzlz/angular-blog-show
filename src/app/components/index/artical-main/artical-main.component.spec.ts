import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalMainComponent } from './artical-main.component';

describe('ArticalMainComponent', () => {
  let component: ArticalMainComponent;
  let fixture: ComponentFixture<ArticalMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
