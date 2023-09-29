import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoOutComponent } from './go-out.component';

describe('GoOutComponent', () => {
  let component: GoOutComponent;
  let fixture: ComponentFixture<GoOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
