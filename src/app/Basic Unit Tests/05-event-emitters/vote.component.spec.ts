import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let tv = null;
    component.voteChanged.subscribe(totalVotes => tv = totalVotes );

    component.upVote();

    // expect(tv).not.toBeNull();
    // be more specific with the eventEmitter tests
    expect(tv).toBe(1);

  });
});