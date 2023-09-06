// Top 10 economical bowlers in the year 2015

function top10EconomicalBowlers(deliveriesData, matchesData) {

  const matchesOf2015 = matchesData.filter((match) => match.season === '2015');

  let economicalBowlersData = {};

  matchesOf2015.forEach((match) => {

    for (let matchDelivery of deliveriesData) {

      if (match.id === matchDelivery.match_id) {

        const bowler = matchDelivery.bowler;
        const concededRuns =
          Number(matchDelivery.total_runs) -
          Number(matchDelivery.bye_runs) -
          Number(matchDelivery.legbye_runs);

        if (!economicalBowlersData[bowler]) {

          economicalBowlersData[bowler] = {
            runs: 0,
            balls: 0,
          };
        }
        
        economicalBowlersData[bowler].runs += concededRuns;
        economicalBowlersData[bowler].balls += 1;
        
      }
    }
  });

  //now we will calculate economy rate of bowler--------

  for (const bowler in economicalBowlersData) {
    const runs = economicalBowlersData[bowler].runs;
    const balls = economicalBowlersData[bowler].balls;

    if (balls > 0) {

      economicalBowlersData[bowler].economy = (runs / (balls / 6)).toFixed(2);

    } else {
      
      economicalBowlersData[bowler].economy = '';
    }
  }

  const economicalBowlersArr = Object.entries(economicalBowlersData);

  economicalBowlersArr.sort(function (a, b) {
    // when we write a[1], b[1], we are accessing the second element of a,b
    // which is the bowler's statistics object.

    const economyA = a[1].economy;
    const economyB = b[1].economy;

    return economyA - economyB;
  });

  const temp10EconomicalBowlerArr = economicalBowlersArr.slice(0, 10);

  //it will genrate data like this
  // [
  //   [
  //     "RN ten Doeschate",
  //     {
  //       "runs": 4,
  //       "balls": 6,
  //       "economy": "4.00"
  //     }
  //   ],
  // ]
  //so we will simplify this structure & after sorting we will again convert back into object form---
  // {
  // "Parvez Rasool": {
  //   "runs": 30,
  //   "balls": 29,
  //   "economy": "6.21"
  // },

  let top10EconomicalBowlersData = {};

  for (let bowlerArr of temp10EconomicalBowlerArr) {
    top10EconomicalBowlersData[bowlerArr[0]] = bowlerArr[1];
  }

  return top10EconomicalBowlersData;
}

module.exports = top10EconomicalBowlers;
