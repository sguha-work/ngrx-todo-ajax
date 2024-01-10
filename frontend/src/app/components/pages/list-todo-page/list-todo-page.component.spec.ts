import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoPageComponent } from './list-todo-page.component';

describe('ListTodoPageComponent', () => {
  let component: ListTodoPageComponent;
  let fixture: ComponentFixture<ListTodoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTodoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
