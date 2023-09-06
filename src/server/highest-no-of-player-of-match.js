// Find a player who has won the highest number of Player of the Match awards for each season

function highestNoOfPlayerOfMatch(matchesData) {

  let highestNoOfPlayerOfMatchData = {};

  for (let match of matchesData) {

    let playerOfMatch = match.player_of_match;
    let season = match.season;

    if (!highestNoOfPlayerOfMatchData[season]) {

      highestNoOfPlayerOfMatchData[season] = {};
    }

    if (!highestNoOfPlayerOfMatchData[season][playerOfMatch]) {

      highestNoOfPlayerOfMatchData[season][playerOfMatch] = 1;

    } else if (highestNoOfPlayerOfMatchData[season][playerOfMatch]) {
        
      highestNoOfPlayerOfMatchData[season][playerOfMatch] += 1;
    }
  }

  //   highestNoOfPlayerOfMatchData contains this type of structure
  // {
  //     '2008': {
  //       'BB McCullum': 1,
  //       'MEK Hussey': 1,
  //       'MF Maharoof': 3,
  //     },
  //     '2009': {
  //         'SR Tendulkar': 2,
  //         'R Dravid': 1,
  //         'DL Vettori': 1,
  //     }
  // }
  //now we will find max noOfPlayerOfMatch in each season and store in result object
  //   result={
  //     {
  //         "2008": {
  //           "SE Marsh": 5
  //         },
  //         "2009": {
  //           "YK Pathan": 3
  //         },
  //   }

  let result = {};

  for (const season in highestNoOfPlayerOfMatchData) {
    let maxPlayerOfMatch = '';
    let maxCount = 0;

    for (const playerOfMatch in highestNoOfPlayerOfMatchData[season]) {
        
      let currentCount = highestNoOfPlayerOfMatchData[season][playerOfMatch];

      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxPlayerOfMatch = playerOfMatch;
      }
    }

    result[season] = {
      [maxPlayerOfMatch]: maxCount,
    };
  }

  return result;
}

module.exports = highestNoOfPlayerOfMatch;
