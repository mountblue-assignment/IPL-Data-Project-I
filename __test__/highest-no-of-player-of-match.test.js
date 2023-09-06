const highestNoOfPlayerOfMatch = require('../src/server/highest-no-of-player-of-match');

const matchesData = [
  { season: '2013', player_of_match: 'MS Dhoni' },
  { season: '2013', player_of_match: 'Yuvraj Singh' },
  { season: '2013', player_of_match: 'MS Dhoni' },
  { season: '2014', player_of_match: 'SV Samson' },
];

test('It should contain highest number of Player of the Match awards for each season', () => {
    
  const result = highestNoOfPlayerOfMatch(matchesData);

  expect(result).toEqual({
    2013: {
      'MS Dhoni': 2,
    },
    2014: {
      'SV Samson': 1,
    },
  });
});
