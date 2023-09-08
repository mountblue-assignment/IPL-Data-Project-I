const bowlerWithBestEconomySuperover = require('../src/server/bowler-with-best-economy-superover');

test('it should return  the bowler with the best economy in super overs', () => {
     const deliveriesData = [
          {
               match_id: '1',
               bowler: 'Bowler A',
               is_super_over: '1',
               total_runs: '10',
               over: '1',
          },
          {
               match_id: '2',
               bowler: 'Bowler B',
               is_super_over: '1',
               total_runs: '12',
               over: '1',
          },
          {
               match_id: '2',
               bowler: 'Bowler B',
               is_super_over: '1',
               total_runs: '10',
               over: '1',
          },
          {
               match_id: '3',
               bowler: 'Bowler A',
               is_super_over: '1',
               total_runs: '12',
               over: '1',
          },
     ];

     const result = bowlerWithBestEconomySuperover(deliveriesData);

     expect(result).toEqual({
          bestBowlerInSuperOver: ['Bowler A', 'Bowler B'],
          bestEconomyInSuperOver: 11.0,
     });
});

test('t will handle empty super over delivery data', () => {
     const deliveriesData = [
          {
               match_id: '1',
               bowler: 'Bowler A',
               is_super_over: '0',
               total_runs: '10',
               over: '1',
          },
          {
               match_id: '2',
               bowler: 'Bowler B',
               is_super_over: '0',
               total_runs: '8',
               over: '1',
          },
     ];

     const result = bowlerWithBestEconomySuperover(deliveriesData);

     expect(result).toEqual({
          bestBowlerInSuperOver: [],
          bestEconomyInSuperOver: Number.MAX_SAFE_INTEGER,
     });
});
