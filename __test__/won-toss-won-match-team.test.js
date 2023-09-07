const wonTossWonMatchTeam = require('../src/server/won-toss-won-match-team');

const matchesData = [
  { toss_winner: 'Rising Pune Supergiant', winner: 'Rising Pune Supergiant' },
  { toss_winner: 'Sunrisers Hyderabad', winner: 'Sunrisers Hyderabad' },
  { toss_winner: 'Rising Pune Supergiant', winner: 'Rising Pune Supergiant' },
  { toss_winner: 'Pune Warriors', winner: 'Pune Warriors' },
  { toss_winner: 'Rising Pune Supergiant', winner: 'Mumbai Indians' },
  { toss_winner: 'Pune Warriors', winner: 'Chenai Superkings' },
  { toss_winner: 'rajasthan Royals', winner: 'Rising Pune Supergiant' },
  { toss_winner: 'Gujrat Titans', winner: 'Pune Warriors' },
];
const result = wonTossWonMatchTeam(matchesData);

test('it should contain team with number of times each team won the toss & won the match', () => {

  expect(result).toEqual({
    'Rising Pune Supergiant': 2,
    'Sunrisers Hyderabad': 1,
    'Pune Warriors': 1,
  });
  
});
