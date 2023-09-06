const top10EconomicalBowlers = require('../src/server/top10-economical-bowlers');

const matchesData = [
  { season: '2015', id: '1' },
  { season: '2015', id: '2' },
  { season: '2015', id: '3' },
  { season: '2015', id: '4' },
  { season: '2015', id: '5' },
  { season: '2015', id: '6' },
  { season: '2015', id: '7' },
  { season: '2015', id: '8' },
  { season: '2015', id: '9' },
  { season: '2015', id: '10' },
];

const deliveriesData = [
  {
    match_id: '1',
    total_runs: '10',
    bye_runs: '0',
    legbye_runs: '0',
    bowler: 'Bowler 1',
  },
  {
    match_id: '2',
    total_runs: '23',
    bye_runs: '1',
    legbye_runs: '4',
    bowler: 'Bowler 2',
  },
  {
    match_id: '3',
    total_runs: '16',
    bye_runs: '0',
    legbye_runs: '0',
    bowler: 'Bowler 3',
  },
  {
    match_id: '4',
    total_runs: '18',
    bye_runs: '2',
    legbye_runs: '3',
    bowler: 'Bowler 4',
  },
  {
    match_id: '5',
    total_runs: '12',
    bye_runs: '1',
    legbye_runs: '2',
    bowler: 'Bowler 5',
  },
  {
    match_id: '6',
    total_runs: '30',
    bye_runs: '3',
    legbye_runs: '5',
    bowler: 'Bowler 6',
  },
  {
    match_id: '7',
    total_runs: '15',
    bye_runs: '0',
    legbye_runs: '1',
    bowler: 'Bowler 7',
  },
  {
    match_id: '8',
    total_runs: '28',
    bye_runs: '2',
    legbye_runs: '2',
    bowler: 'Bowler 8',
  },
  {
    match_id: '9',
    total_runs: '20',
    bye_runs: '1',
    legbye_runs: '1',
    bowler: 'Bowler 9',
  },
  {
    match_id: '10',
    total_runs: '22',
    bye_runs: '2',
    legbye_runs: '3',
    bowler: 'Bowler 10',
  },
];



// test case 1: it should follow this same structure ----

test('it should show Top 10 economical bowlers in the year 2015', () => {
  const result = top10EconomicalBowlers(deliveriesData, matchesData);

  expect(result).toEqual({
    'Bowler 1': { runs: 10, balls: 1, economy: '60.00' },
    'Bowler 2': { runs: 18, balls: 1, economy: '108.00' },
    'Bowler 3': { runs: 16, balls: 1, economy: '96.00' },
    'Bowler 4': { runs: 13, balls: 1, economy: '78.00' },
    'Bowler 5': { runs: 9, balls: 1, economy: '54.00' },
    'Bowler 6': { runs: 22, balls: 1, economy: '132.00' },
    'Bowler 7': { runs: 14, balls: 1, economy: '84.00' },
    'Bowler 8': { runs: 24, balls: 1, economy: '144.00' },
    'Bowler 9': { runs: 18, balls: 1, economy: '108.00' },
    'Bowler 10': { runs: 17, balls: 1, economy: '102.00' },
  });
});

//test case 2: it should return 10 economical bowlers data ---

test('it should return 10 economical bowlers data', () => {
  const result = top10EconomicalBowlers(deliveriesData, matchesData);

  const bowlers = Object.keys(result);

  expect(bowlers.length).toBe(10);
});
