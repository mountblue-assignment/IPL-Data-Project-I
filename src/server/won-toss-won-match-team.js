// Find the number of times each team won the toss and also won the match

function wonTossWonMatchTeam(matchesData) {
  let wonTossWonMatchTeamData = {};

  for (let match of matchesData) {
    let toss_winner = match.toss_winner;
    let winner = match.winner;

    if (toss_winner && winner && toss_winner === winner) {
      if (!wonTossWonMatchTeamData[winner]) {
        wonTossWonMatchTeamData[winner] = 1;
      } else {
        wonTossWonMatchTeamData[winner] += 1;
      }
    }
  }

  return wonTossWonMatchTeamData;
}

module.exports = wonTossWonMatchTeam;
