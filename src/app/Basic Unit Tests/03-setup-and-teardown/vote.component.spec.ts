import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  // Arrange
  let component: VoteComponent
  beforeEach(() => {
    // set up
    component = new VoteComponent();
  })

  afterEach(()=> {
    // do cleanup here!!!
    // executes after each test
    // tear down
  });

  beforeAll(()=> {
    // excuted once before all tests
  });

  afterAll(()=> {
    // excuted once after all test are executed
  });


  

  it('should increment total votes when upvoted', () => {
    // Act
    component.upVote();

    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement total votes when upvoted', () => {
    // Act
    component.downVote();
    
    //Assert
    expect(component.totalVotes).toBe(-1);
  });
});