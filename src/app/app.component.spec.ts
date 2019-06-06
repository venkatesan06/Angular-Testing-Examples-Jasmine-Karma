import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import {RouterOutlet, RouterLinkWithHref} from '@angular/router';
import { NO_ERRORS_SCHEMA } from '../../node_modules/@angular/core';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ],
      // Prefer to declare child components unless things are too complex, else use schema
      // schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Welcome to Testing Demos!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to Testing Demos!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Testing Demos!');
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
   
    expect(de).not.toBeNull();
  });

  // fix this later
  // it('should have a link to the todos page', () => {
  //   let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  //   console.log(debugElements);
  //   let index = debugElements.findIndex(de => de.properties['href'] === 'todos');
  //   expect(index).toBeGreaterThan(-1);
  // });
});
