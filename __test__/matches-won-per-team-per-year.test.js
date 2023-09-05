const matchesWonPerYear = require('../src/server/matches-won-per-team-per-year');

test('It should show each year in which Number of matches won by per teams ', () => {
  const matchesData = [
    { season: '2017', winner: 'Sunrisers Hyderabad' },
    { season: '2017', winner: 'Rising Pune Supergiant' },
    { season: '2016', winner: 'Rising Pune Supergiant' },
    { season: '2016', winner: 'Kolkata Knight Riders' },
    { season: '2015', winner: 'Kolkata Knight Riders' },
  ];

  const result = matchesWonPerYear(matchesData);

  expect(result).toEqual({
    '2015': {
      'Kolkata Knight Riders': {
        won_matches: 1,
      }
    },
   '2016': {
      'Kolkata Knight Riders': {
        won_matches: 1,
      },
      'Rising Pune Supergiant': {
        won_matches: 1,
      },
    },
    '2017': {
      'Rising Pune Supergiant': {
        won_matches: 1,
      },
      'Sunrisers Hyderabad': {
        won_matches: 1,
      },
    },
  });
});
