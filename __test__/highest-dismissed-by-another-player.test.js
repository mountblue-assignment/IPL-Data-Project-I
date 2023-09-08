const highestDismissedByAnotherPlayer = require('../src/server/highest-dismissed-by-another-player');

const deliveries = [
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
          bowler: 'SB Jakati',
          dismissal_kind: 'caught',
     },
     {
          batsman: 'S Dhawan',
          bowler: 'JA Morkel',
          dismissal_kind: 'caught',
     },
     {
          batsman: 'MC Henriques',
          bowler: 'Sandeep Sharma',
          dismissal_kind: 'lbw',
     },
     {
          batsman: 'S Dhawan',
          bowler: 'JA Morkel',
          dismissal_kind: 'bowled',
     },
];

test('highestDismissedByAnotherPlayer should return an object', () => {
     const result = highestDismissedByAnotherPlayer(deliveries);
     expect(typeof result).toBe('object');
});

test('highestDismissedByAnotherPlayer should contain dismissals by bowler', () => {
     const result = highestDismissedByAnotherPlayer(deliveries);

     const expected = {
          batsman: 'S Dhawan',
          maxDismissalsByBowler: ['P Kumar', 'JA Morkel'],
          maxDismissals: 2,
     };

     expect(result).toEqual(expected);
});

test('if there is no dismissals', () => {
     const result = highestDismissedByAnotherPlayer([]);

     expect(result).toEqual({
          batsman: null,
          maxDismissalsByBowler: [],
          maxDismissals: 0,
     });
});
