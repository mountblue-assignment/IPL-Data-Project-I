
const matchesData=require('./src/data/matchesResult.json');
const deliveriesData=require('./src/data/deliveriesResult.json');
const generateJson=require('./utility/generateJson');



//for matches per year -----------

const matchesPerYear=require('./src/server/matches-per-year');
const totalMatchesPerYear=matchesPerYear(matchesData);

//for generating json files 
generateJson(totalMatchesPerYear,'./src/public/output/matchesPerYear.json');


//for matches won per team per year ------------

const matchesWonPerTeamPerYear=require('./src/server/matches-won-per-team-per-year');
const totalWinnersTeamPerYear=matchesWonPerTeamPerYear(matchesData);

generateJson(totalWinnersTeamPerYear,'./src/public/output/matchesWonPerTeamPerYear.json');


//for extra run conceded per team in 2016 ;

const extraRunConcededPerTeam=require('./src/server/extra-run-conceded-per-team');
const extraRunConcededPerTeamData=extraRunConcededPerTeam(deliveriesData,matchesData,'2016');

generateJson(extraRunConcededPerTeamData,'./src/public/output/extraRunConcededPerTeam.json');


// Top 10 economical bowlers in the year 2015

const top10EconomicalBowlers=require('./src/server/top10-economical-bowlers');
const top10EconomicalBowlersData=top10EconomicalBowlers(deliveriesData,matchesData);

generateJson(top10EconomicalBowlersData,'./src/public/output/top10EconomicalBowlers.json');



// Find the number of times each team won the toss and also won the match

const wonTossWonMatchTeam=require('./src/server/won-toss-won-match-team');
const wonTossWonMatchTeamData=wonTossWonMatchTeam(matchesData);

generateJson(wonTossWonMatchTeamData,'./src/public/output/wonTossWonMatchTeam.json');