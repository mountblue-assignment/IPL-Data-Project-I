
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
