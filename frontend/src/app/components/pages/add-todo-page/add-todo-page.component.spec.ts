import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoPageComponent } from './add-todo-page.component';

describe('AddTodoPageComponent', () => {
  let component: AddTodoPageComponent;
  let fixture: ComponentFixture<AddTodoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
