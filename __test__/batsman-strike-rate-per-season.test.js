const batsmanStrikeRatePerSeason = require('../src/server/batsman-strike-rate-per-season');

const matches = [
     { id: '1', season: '2008' },
     { id: '2', season: '2008' },
     { id: '3', season: '2009' },
     { id: '4', season: '2010' },
];

const deliveries = [
     {
          match_id: '1',
          batsman: 'SC Ganguly',
          total_runs: '1',
          ball: '2',
     },
     {
          match_id: '2',
          batsman: 'SC Ganguly',
          total_runs: '0',
          ball: '3',
     },
     {
          match_id: '3',
          batsman: 'ST Jayasuriya',
          total_runs: '2',
          ball: '1',
     },
     {
          match_id: '4',
          batsman: 'MC Henriques',
          total_runs: '0',
          ball: '0',
     },
];

test('calculates the strike rate for a batsman in a season', () => {
     const result = batsmanStrikeRatePerSeason(matches, deliveries);

     expect(result).toMatchObject({
          2008: {
               'SC Ganguly': {
                    totalRuns: 1,
                    ballFaced: 5,
                    strikeRate: '20.00',
               },
          },
          2009: {
               'ST Jayasuriya': {
                    totalRuns: 2,
                    ballFaced: 1,
                    strikeRate: '200.00',
               },
          },
          2010: {
               'MC Henriques': {
                    totalRuns: 0,
                    ballFaced: 0,
                    strikeRate: 'NaN',
               },
          },
     });
});
