import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaCarteComponent } from './ala-carte.component';

describe('AlaCarteComponent', () => {
  let component: AlaCarteComponent;
  let fixture: ComponentFixture<AlaCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlaCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlaCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
