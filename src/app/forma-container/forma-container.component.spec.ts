import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaContainerComponent } from './forma-container.component';

describe('FormaContainerComponent', () => {
  let component: FormaContainerComponent;
  let fixture: ComponentFixture<FormaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
