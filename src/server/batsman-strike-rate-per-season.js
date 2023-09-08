//Find the strike rate of a batsman for each season

function batsmanStrikeRatePerSeason(matches, deliveries) {
     const batsmanStrikeRatePerSeasonData = {};

     for (let matchDelivery of deliveries) {
          let batsman = matchDelivery.batsman;
          let totalRuns = Number(matchDelivery.total_runs);
          let ballFaced = Number(matchDelivery.ball);

          //we will compare match.id to matchDelivery.match_id  to get season

          let match = matches.find((match) => match.id === matchDelivery.match_id);

          let matchYear = match.season;

          if (matchYear) {
               if (!batsmanStrikeRatePerSeasonData[matchYear]) {
                    batsmanStrikeRatePerSeasonData[matchYear] = {};
               }

               if (!batsmanStrikeRatePerSeasonData[matchYear][batsman]) {
                    batsmanStrikeRatePerSeasonData[matchYear][batsman] = {
                         totalRuns: 0,
                         ballFaced: 0,
                    };
               }

               batsmanStrikeRatePerSeasonData[matchYear][batsman].totalRuns += totalRuns;
               batsmanStrikeRatePerSeasonData[matchYear][batsman].ballFaced += ballFaced;

               const strikeRate =
                    (batsmanStrikeRatePerSeasonData[matchYear][batsman].totalRuns /
                         batsmanStrikeRatePerSeasonData[matchYear][batsman].ballFaced) *
                    100;

               batsmanStrikeRatePerSeasonData[matchYear][batsman].strikeRate =
                    strikeRate.toFixed(2);
          }
     }

     return batsmanStrikeRatePerSeasonData;
}

module.exports = batsmanStrikeRatePerSeason;
