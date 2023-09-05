// Number of matches won per team per year in IPL.

function matchesWonPerYear(matchesData) {
  let totalWinnerTeamPerYear = {};

  for (let match of matchesData) {
    //we will make object of each winner team inside totalWinnerTeamPerYear like this
    // 2017:{
    //   'Sunrisers Hyderabad':{
    //     won_matches:12
    //   },
    //   .....
    // }

    let winnerTeam = match.winner;
    let season = match.season;

    if (!totalWinnerTeamPerYear[season] && season) {
      totalWinnerTeamPerYear[season] = {};
    }
    if (!totalWinnerTeamPerYear[season][winnerTeam] && winnerTeam) {
      totalWinnerTeamPerYear[season][winnerTeam] = {
        won_matches: 1,
      };
    } else if (
      totalWinnerTeamPerYear[season][winnerTeam] &&
      totalWinnerTeamPerYear[season][winnerTeam].won_matches
    ) {
      totalWinnerTeamPerYear[season][winnerTeam].won_matches += 1;
    }
  }

  return totalWinnerTeamPerYear;
}

module.exports = matchesWonPerYear;
