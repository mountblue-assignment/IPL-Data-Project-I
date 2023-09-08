// Number of matches played per year for all the years in IPL.

function matchesPerYear(matchesData) {
     const totalMatchesPerYear = {};

     for (let match of matchesData) {
          let season = match.season;
          if (totalMatchesPerYear[season]) {
               totalMatchesPerYear[season] += 1;
          } else {
               totalMatchesPerYear[season] = 1;
          }
     }

     return totalMatchesPerYear;
}

module.exports = matchesPerYear;
