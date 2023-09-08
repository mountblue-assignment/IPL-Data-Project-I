//Find the bowler with the best economy in super overs

function bowlerWithBestEconomySuperover(deliveries) {
     //firstly we will seprate superover deliveriesData

     const superoverDeliveriesData = deliveries.filter((matchDelivery) => {
          if (matchDelivery.is_super_over === '1') {
               return matchDelivery;
          }
     });

     //then we will make bowler as key and  runsConcededSuperOver , ballsBowledSuperOver as properties

     const bowlerWithBestEconomySuperoverData = {};

     for (let matchDelivery of superoverDeliveriesData) {
          const bowler = matchDelivery.bowler;
          const totalRuns = Number(matchDelivery.total_runs);
          const over = Number(matchDelivery.over);

          if (!bowlerWithBestEconomySuperoverData[bowler]) {
               bowlerWithBestEconomySuperoverData[bowler] = {
                    runsConcededSuperOver: 0,
                    ballsBowledSuperOver: 0,
               };
          }

          bowlerWithBestEconomySuperoverData[bowler].runsConcededSuperOver += totalRuns;
          bowlerWithBestEconomySuperoverData[bowler].ballsBowledSuperOver += over;
     }

     //   after creating bowlerWithBestEconomySuperoverData it will look like this
     // {
     //   'JP Faulkner': { runsConcededSuperOver: 22, ballsBowledSuperOver: 11 },
     //   'JJ Bumrah': { runsConcededSuperOver: 6, ballsBowledSuperOver: 8 },
     // }
     //then we will find economyInSuperOver and also comapare economyInSuperOver with each other and find
     // bestEconomyInSuperOver  with bestBowlerInSuperOver

     let bestBowlerInSuperOver = [];
     let bestEconomyInSuperOver = Number.MAX_SAFE_INTEGER;

     for (let bowler in bowlerWithBestEconomySuperoverData) {
          const bowlerStats = bowlerWithBestEconomySuperoverData[bowler];

          const economyInSuperOver = (
               bowlerStats.runsConcededSuperOver / bowlerStats.ballsBowledSuperOver
          ).toFixed(2);

          if (bestEconomyInSuperOver > economyInSuperOver) {
               bestEconomyInSuperOver = economyInSuperOver;
               bestBowlerInSuperOver = [bowler];
          } else if (bestEconomyInSuperOver == economyInSuperOver) {
               bestBowlerInSuperOver.push(bowler);
          }
     }

     return {
          bestBowlerInSuperOver: bestBowlerInSuperOver,
          bestEconomyInSuperOver: parseFloat(bestEconomyInSuperOver),
     };
}

module.exports = bowlerWithBestEconomySuperover;
