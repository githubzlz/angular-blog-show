import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalSideComponent } from './artical-side.component';

describe('ArticalSideComponent', () => {
  let component: ArticalSideComponent;
  let fixture: ComponentFixture<ArticalSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
