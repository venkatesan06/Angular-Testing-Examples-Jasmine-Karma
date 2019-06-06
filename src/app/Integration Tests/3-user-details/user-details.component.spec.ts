/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

// This uses a fake router, or stub, in order to test routing
class RouterStub {
  // dummy implementation of used router method
  navigate(params) {

  }
}

class ActivatedRouteStub {
  // has all obserable features, but can push a new value into the subject/observable with a method
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    // exposed as an obserable to the outside
    return this.subject.asObservable();
  }

  // params: Observable<any> = empty();
}
describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        // When angular sees the router, it will use our stub class instead 
        {provide: Router, useClass: RouterStub },
        {provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should redirect the user to the users page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  // testing the router parameters here
  it('should navigate the user to the not found page when invalid user id is passed', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    
    // push new value to observable
    route.push({id: 0});

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
