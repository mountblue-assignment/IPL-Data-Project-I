const batsmanStrikeRatePerSeason = require('../src/server/batsman-strike-rate-per-season');

const matchesData = [
  { id: '1', season: '2008' },
  { id: '2', season: '2008' },
  { id: '3', season: '2009' },
];

const deliveriesData = [
  {
    match_id: '1',
    batsman: 'SC Ganguly',
    total_runs: '386',
    ball: '1181',
  },
  {
    match_id: '2',
    batsman: 'SC Ganguly',
    total_runs: '200',
    ball: '600',
  },
  {
    match_id: '3',
    batsman: 'ST Jayasuriya',
    total_runs: '246',
    ball: '750',
  },
];

test('calculates the strike rate for a batsman in a season', () => {
  const result = batsmanStrikeRatePerSeason(matchesData, deliveriesData);

  expect(result).toMatchObject({
    2008: {
      'SC Ganguly': {
        totalRuns: 586,
        ballFaced: 1781,
        strikeRate: '32.90',
      },
    },
    2009: {
      'ST Jayasuriya': {
        totalRuns: 246,
        ballFaced: 750,
        strikeRate: '32.80',
      },
    },
  });
});
