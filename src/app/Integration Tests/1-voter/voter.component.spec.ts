import { VoterComponent } from './voter.component';
import {By} from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;
  // TestBed makes angular create the component for you
  beforeEach(() => {

    // Look at the module you are testing, as this shares same structure
    TestBed.configureTestingModule({
      declarations: [ VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    // fixture.debugElement // wrapper around a component to get elements
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    // makes the component responsive
    fixture.detectChanges();

    // query all returns all elements with the desired trait
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement  = de.nativeElement;
    expect(el.innerText).toContain('21');
  });

  it('should hightlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    // for native html elements you need to get ref to html element 
    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when i click the upvote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    // make sure to keep tests clean and maintainable
    expect(component.totalVotes).toBe(1);
  })
});
