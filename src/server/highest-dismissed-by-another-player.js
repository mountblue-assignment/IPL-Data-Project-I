//Find the highest number of times one player has been dismissed by another player

function highestDismissedByAnotherPlayer(deliveries) {
     const highestDismissedByAnotherPlayerData = {};

     for (let matchDelivery of deliveries) {
          let dismissalKind = matchDelivery.dismissal_kind;
          let batsMan = matchDelivery.batsman;
          let bowler = matchDelivery.bowler;

          if (dismissalKind && dismissalKind !== 'run out') {
               if (!highestDismissedByAnotherPlayerData[batsMan]) {
                    highestDismissedByAnotherPlayerData[batsMan] = {};
               }

               if (!highestDismissedByAnotherPlayerData[batsMan][bowler]) {
                    highestDismissedByAnotherPlayerData[batsMan][bowler] = 1;
               } else if (highestDismissedByAnotherPlayerData[batsMan][bowler]) {
                    highestDismissedByAnotherPlayerData[batsMan][bowler]++;
               }
          }
     }

     //it will generate the highestDismissedByAnotherPlayerData object so using this we can find highest dismissals
     // let highestDismissedByAnotherPlayerData={
     //   'D du Preez': { 'A Singh': 1 },
     //   'RR Raje': { 'R Bhatia': 1 },
     //   'M Morkel': {
     //     'RG Sharma': 1,
     //     'A Kumble': 1,
     //     'Harmeet Singh': 1,
     // }

     let maxDismissalsInResult = 0;
     let maxDismissalsByBowlerInResult = [];
     let maxDismissedBatsman = null;

     for (let batsman in highestDismissedByAnotherPlayerData) {
          for (let bowler in highestDismissedByAnotherPlayerData[batsman]) {
               let currentDismissals =
                    highestDismissedByAnotherPlayerData[batsman][bowler];

               if (maxDismissalsInResult < currentDismissals) {
                    maxDismissalsInResult = currentDismissals;
                    maxDismissedBatsman = batsman;
                    maxDismissalsByBowlerInResult = [bowler];
               } else if (maxDismissalsInResult === currentDismissals) {
                    maxDismissalsByBowlerInResult.push(bowler);
               }
          }
     }

     return {
          batsman: maxDismissedBatsman,
          maxDismissalsByBowler: maxDismissalsByBowlerInResult,
          maxDismissals: maxDismissalsInResult,
     };
}

module.exports = highestDismissedByAnotherPlayer;
