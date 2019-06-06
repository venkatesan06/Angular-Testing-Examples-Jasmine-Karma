import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { from, empty, throwError } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with items returned from the server', () => {
    let todos = [1,2,3];
    spyOn(service, 'getTodos').and.callFake(() => {
      // simulate the response from the server
      // create obserable return
      // need the [] here 
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new todo is added', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();

  });

  it('should add the new todo from the server', () => {
    let todo = {id: 1};
    spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });


  it('should set the message property if server returns error when adding new todo', () => {
    let errorMessage = "Error from the server";
    spyOn(service, 'add').and.returnValue(throwError(errorMessage));

    component.add();

    expect(component.message).toBe(errorMessage);
  });


  it('it should call the server to delete a todo item if the server is called', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('it should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledTimes(0);
  });

});