const extraRunConcededPerTeam = require('../src/server/extra-run-conceded-per-team');

test('It should show extra run conceded per team in 2016 ', () => {
     const matches = [
          { season: '2016', id: '1' },
          { season: '2015', id: '2' },
          { season: '2016', id: '3' },
          { season: '2017', id: '4' },
          { season: '2016', id: '5' },
     ];

     const deliveries = [
          { match_id: '1', bowling_team: 'Royal Challengers Bangalore', extra_runs: '2' },
          { match_id: '2', bowling_team: 'Sunrisers Hyderabad', extra_runs: '4' },
          { match_id: '3', bowling_team: 'Delhi Daredevils', extra_runs: '6' },
          { match_id: '4', bowling_team: 'Royal Challengers Bangalore', extra_runs: '7' },
          { match_id: '5', bowling_team: 'Delhi Daredevils', extra_runs: '10' },
     ];

     const year = '2016';

     const result = extraRunConcededPerTeam(deliveries, matches, year);

     expect(result).toEqual({
          'Royal Challengers Bangalore': {
               extra_runs: 2,
          },
          'Delhi Daredevils': {
               extra_runs: 16,
          },
     });
});
