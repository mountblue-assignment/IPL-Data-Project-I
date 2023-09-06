const extraRunConcededPerTeam = require('../src/server/extra-run-conceded-per-team');

test('It should show extra run conceded per team in 2016 ', () => {

    const matchesData=[
        {season:'2016',id:'1'},
        {season:'2015',id:'2'},
        {season:'2016',id:'3'},
        {season:'2017',id:'4'}
     ]
      
     const deliveriesData=[
        {match_id:'1',bowling_team:'Royal Challengers Bangalore',extra_runs:'2'},
        {match_id:'2',bowling_team:'Sunrisers Hyderabad',extra_runs:'4'},
        {match_id:'3',bowling_team:'Delhi Daredevils',extra_runs:'6'},
        {match_id:'4',bowling_team:'Royal Challengers Bangalore',extra_runs:'7'},
     ]

  const year = '2016';

  const result = extraRunConcededPerTeam(deliveriesData, matchesData, year);

  expect(result).toEqual({
    'Royal Challengers Bangalore': {
      'extra_runs': 2,
    },
    'Delhi Daredevils': {
      'extra_runs': 6,
    },
  });
});
