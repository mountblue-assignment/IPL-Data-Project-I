// Extra runs conceded per team in the year 2016

function extraRunConcededPerTeam(deliveries, matches, year) {
     let extraRunConcededPerTeamData = {};

     let matchInYearData = matches.filter((match) => {
          if (match.season === year) {
               return match;
          }
     });

     for (let matchDelivery of deliveries) {
          const match = matchInYearData.find((match) => {
               if (match.id === matchDelivery.match_id) {
                    return match;
               }
          });

          if (match && !extraRunConcededPerTeamData[matchDelivery.bowling_team]) {
               extraRunConcededPerTeamData[matchDelivery.bowling_team] = {};
               extraRunConcededPerTeamData[matchDelivery.bowling_team].extra_runs = 0;
          }
          if (match && extraRunConcededPerTeamData[matchDelivery.bowling_team]) {
               extraRunConcededPerTeamData[matchDelivery.bowling_team].extra_runs +=
                    Number(matchDelivery.extra_runs);
          }
     }

     return extraRunConcededPerTeamData;
}

module.exports = extraRunConcededPerTeam;
