import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FidacComponent } from './fidac.component';

describe('FidacComponent', () => {
  let component: FidacComponent;
  let fixture: ComponentFixture<FidacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FidacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
