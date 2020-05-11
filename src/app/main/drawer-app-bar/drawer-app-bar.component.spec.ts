import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerAppBarComponent } from './drawer-app-bar.component';

describe('DrawerAppBarComponent', () => {
  let component: DrawerAppBarComponent;
  let fixture: ComponentFixture<DrawerAppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerAppBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
