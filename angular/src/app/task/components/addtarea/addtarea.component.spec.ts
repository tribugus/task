import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtareaComponent } from './addtarea.component';

describe('AddtareaComponent', () => {
  let component: AddtareaComponent;
  let fixture: ComponentFixture<AddtareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
