const highestDismissedByAnotherPlayer = require('../src/server/highest-dismissed-by-another-player');

const deliveriesData = [
  {
    batsman: 'DA Warner',
    bowler: 'Harbhajan Singh',
    dismissal_kind: 'caught',
  },
  {
    batsman: 'S Dhawan',
    bowler: 'P Kumar',
    dismissal_kind: 'caught',
  },
  {
    batsman: 'S Dhawan',
    bowler: 'P Kumar',
    dismissal_kind: 'caught',
  },
  {
    batsman: 'DA Warner',
    bowler: 'Harbhajan Singh',
    dismissal_kind: 'caught',
  },
  {
    batsman: 'MC Henriques',
    bowler: 'Sandeep Sharma',
    dismissal_kind: 'lbw',
  },
  {
    batsman: 'S Dhawan',
    bowler: 'P Kumar',
    dismissal_kind: 'bowled',
  },
];

test('highestDismissedByAnotherPlayer should return an object', () => {
  const result = highestDismissedByAnotherPlayer(deliveriesData);
  expect(typeof result).toBe('object');
});

test('highestDismissedByAnotherPlayer should contain dismissals by bowler', () => {
  const result = highestDismissedByAnotherPlayer(deliveriesData);

  const expected = {
    'DA Warner': {
      'Harbhajan Singh': 2,
    },
    'S Dhawan': {
      'P Kumar': 3,
    },
    'MC Henriques': {
      'Sandeep Sharma': 1,
    },
  };

  expect(result).toEqual(expected);
});

test('if there is no dismissals', () => {
  const result = highestDismissedByAnotherPlayer([]);
  expect(result).toEqual({});
});
