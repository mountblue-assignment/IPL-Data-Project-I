// Number of matches won per team per year in IPL.

function matchesWonPerTeamPerYear(matchesData) {
  let totalWinnersTeamPerYear = {};

  for (let match of matchesData) {
    //we will make object of each winner team inside totalWinnersTeamPerYear like this
    // 2017:{
    //   'Sunrisers Hyderabad':{
    //     won_matches:12
    //   },
    //   .....
    // }

    let winnerTeam = match.winner;
    let season = match.season;

    if (!totalWinnersTeamPerYear[season] && season) {
      totalWinnersTeamPerYear[season] = {};
    }
    if (!totalWinnersTeamPerYear[season][winnerTeam] && winnerTeam) {
      totalWinnersTeamPerYear[season][winnerTeam] = {
        won_matches: 1,
      };
    } else if (
      totalWinnersTeamPerYear[season][winnerTeam] &&
      totalWinnersTeamPerYear[season][winnerTeam].won_matches
    ) {
      totalWinnersTeamPerYear[season][winnerTeam].won_matches += 1;
    }
  }

  return totalWinnersTeamPerYear;
}

module.exports = matchesWonPerTeamPerYear;
