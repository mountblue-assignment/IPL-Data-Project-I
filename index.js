
const matchesData= require('./src/data/matchesResult.json');
const deliveriesData= require('./src/data/deliveriesResult.json');
const generateJson= require('./utility/generateJson');

const matchesPerYear= require('./src/server/matches-per-year');
const matchesWonPerTeamPerYear= require('./src/server/matches-won-per-team-per-year');
const extraRunConcededPerTeam= require('./src/server/extra-run-conceded-per-team');
const top10EconomicalBowlers= require('./src/server/top10-economical-bowlers');
const wonTossWonMatchTeam= require('./src/server/won-toss-won-match-team');
const highestNoOfPlayerOfMatch= require('./src/server/highest-no-of-player-of-match');
const highestDismissedByAnotherPlayer= require('./src/server/highest-dismissed-by-another-player');
const batsmanStrikeRatePerSeason= require('./src/server/batsman-strike-rate-per-season');
const bowlerWithBestEconomySuperover = require('./src/server/bowler-with-best-economy-superover');

//for generating json files --------

const totalMatchesPerYear=matchesPerYear(matchesData);
generateJson(totalMatchesPerYear,'./src/public/output/matchesPerYear.json');


//for matches won per team per year ------------

const totalWinnersTeamPerYear=matchesWonPerTeamPerYear(matchesData);
generateJson(totalWinnersTeamPerYear,'./src/public/output/matchesWonPerTeamPerYear.json');


//for extra run conceded per team in 2016 ;-------

const extraRunConcededPerTeamData=extraRunConcededPerTeam(deliveriesData,matchesData,'2016');
generateJson(extraRunConcededPerTeamData,'./src/public/output/extraRunConcededPerTeam.json');


// Top 10 economical bowlers in the year 2015 ----------

const top10EconomicalBowlersData=top10EconomicalBowlers(deliveriesData,matchesData);
generateJson(top10EconomicalBowlersData,'./src/public/output/top10EconomicalBowlers.json');



// Find the number of times each team won the toss and also won the match -----------

const wonTossWonMatchTeamData=wonTossWonMatchTeam(matchesData);
generateJson(wonTossWonMatchTeamData,'./src/public/output/wonTossWonMatchTeam.json');


// Find a player who has won the highest number of Player of the Match awards for each season -----------

const highestNoOfPlayerOfMatchData=highestNoOfPlayerOfMatch(matchesData);
generateJson(highestNoOfPlayerOfMatchData,'./src/public/output/highestNoOfPlayerOfMatch.json');


// Find the highest number of times one player has been dismissed by another player----------------

const highestDismissedByAnotherPlayerData=highestDismissedByAnotherPlayer(deliveriesData);
generateJson(highestDismissedByAnotherPlayerData,'./src/public/output/highestDismissedByAnotherPlayer.json');


//Find the strike rate of a batsman for each se

const batsmanStrikeRatePerSeasonData=batsmanStrikeRatePerSeason(matchesData,deliveriesData);
generateJson(batsmanStrikeRatePerSeasonData,'./src/public/output/batsmanStrikeRatePerSeason.json');

//Find the bowler with the best economy in super over
const bowlerWithBestEconomySuperoverData=bowlerWithBestEconomySuperover(deliveriesData);
generateJson(bowlerWithBestEconomySuperoverData,'./src/public/output/bowlerWithBestEconomySuperover.json');
