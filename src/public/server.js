async function fetchAndPlotMatchesPerYear() {
     const response = await fetch('./output/matchesPerYear.json');
     const data = await response.json();

     const years = Object.keys(data);
     Highcharts.chart('chart-1', {
          chart: {
               type: 'column',
          },
          title: {
               text: 'Number of matches per year',
          },
          subtitle: {
               text: 'Source: IPL Project',
          },
          xAxis: {
               categories: years,
               crosshair: true,
          },
          yAxis: {
               min: 0,
               title: {
                    text: 'Matches',
               },
          },
          plotOptions: {
               column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
               },
          },
          series: [
               {
                    name: 'Matches',
                    data: Object.values(data),
               },
          ],
     });
}

async function fetchAndPlotMatchesWonTeamPerYear() {
     const response = await fetch('./output/matchesWonPerTeamPerYear.json');
     const data = await response.json();

     const years = Object.keys(data);

     let myMap = new Map();

     function addToMap(key, value) {
          if (myMap.has(key)) {
               const existingValue = myMap.get(key);
               existingValue.push(value);
          } else {
               myMap.set(key, [value]);
          }
     }

     for (let season in data) {
          let eachSeason = data[season];

          for (team in eachSeason) {
               addToMap(team, eachSeason[team]);
          }
     }
     console.log(myMap);
     let matchesWonPerTeamPerYear = [];

     for (let [key, value] of myMap) {
          let eachObj = {
               name: key,
               data: value,
          };
          matchesWonPerTeamPerYear.push(eachObj);
     }

     Highcharts.chart('chart-2', {
          chart: {
               type: 'column',
          },
          title: {
               text: 'Number of matches Won Per Team Per Year',
          },
          subtitle: {
               text: 'Source: IPL Project',
          },
          xAxis: {
               categories: years,
               crosshair: true,
          },
          yAxis: {
               min: 0,
               title: {
                    text: 'Matches',
               },
          },
          tooltip: {
               headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
               pointFormat:
                    '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:1f} times</b></td></tr>',
               footerFormat: '</table>',
               shared: true,
               useHTML: true,
          },
          plotOptions: {
               column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
               },
          },
          series: matchesWonPerTeamPerYear,
     });
}

async function fetchAndPlotExtraRunConcededPerTeam() {
     const response = await fetch('./output/extraRunConcededPerTeam.json');
     const data = await response.json();
     const teams = Object.keys(data);
     const runs = teams.map((team) => data[team].extra_runs);

     Highcharts.chart('chart-3', {
          chart: {
               type: 'column',
          },
          title: {
               text: 'Extra Run conceded Per Team',
          },
          subtitle: {
               text: 'Source: IPL Project',
          },
          xAxis: {
               categories: teams,
               crosshair: true,
               title: {
                    text: 'Teams',
               },
          },
          yAxis: {
               min: 0,
               title: {
                    text: 'Extra Runs',
               },
          },
          plotOptions: {
               column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
               },
          },
          series: [
               {
                    name: 'Extra Run',
                    data: runs,
               },
          ],
     });
}

async function fetchAndPlotTop10EconomicalBowlers() {
     const response = await fetch('./output/top10EconomicalBowlers.json');
     const data = await response.json();
     const bowlers = Object.keys(data);
     const economies = bowlers.map((bowler) => Number(data[bowler].economy));

     Highcharts.chart('chart-4', {
          chart: {
               type: 'column',
          },
          title: {
               text: 'Top 10 Economical Bowlers',
          },
          subtitle: {
               text: 'Source: IPL Project',
          },
          xAxis: {
               categories: bowlers,
               crosshair: true,
               title: {
                    text: 'Bowlers',
               },
          },
          yAxis: {
               min: 0,
               title: {
                    text: 'Economy',
               },
          },
          plotOptions: {
               column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
               },
          },
          series: [
               {
                    name: 'Economy',
                    data: economies,
               },
          ],
     });
}

async function fetchAndPlotWonTossWonMatchTeam() {
     const response = await fetch('./output/wonTossWonMatchTeam.json');
     const data = await response.json();

     const teams = Object.keys(data);
     const matches = Object.values(data);

     Highcharts.chart('chart-5', {
          chart: {
               type: 'column',
          },
          title: {
               text: 'Numbers of teams who Won the Toss & Won the Matches',
          },
          subtitle: {
               text: 'Source: IPL Project',
          },
          xAxis: {
               categories: teams,
               crosshair: true,
               title: {
                    text: 'Teams',
               },
          },
          yAxis: {
               min: 0,
               title: {
                    text: 'won the Toss & won the Matches',
               },
          },
          plotOptions: {
               column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
               },
          },
          series: [
               {
                    name: 'Won both Matches and Toss',
                    data: matches,
               },
          ],
     });
}

async function fetchAndPlotHighestNoOfPlayerOfMatch() {
     const response = await fetch('./output/highestNoOfPlayerOfMatch.json');
     const data = await response.json();

     const players = [];
     const seriesData = [];

     const years = Object.keys(data);

     years.forEach((year) => {
          const yearData = data[year];
          // Iterate through each player in the current year's data
          for (const player in yearData) {
               // If the player is not already in the players array, add them
               if (!players.includes(player)) {
                    players.push(player);
               }
          }
     });

     // Create series data for each player
     players.forEach((player) => {
          const playerData = years.map((year) => data[year][player] || 0);
          seriesData.push({
               name: player,
               data: playerData,
          });
     });

     Highcharts.chart('chart-6', {
          chart: {
               type: 'bar',
          },
          title: {
               text: 'Player of the Match Awards Per Year',
          },
          subtitle: {
               text: 'Source: IPL Project',
          },
          xAxis: {
               categories: years,
               title: {
                    text: 'Year',
               },
          },
          yAxis: {
               min: 0,
               title: {
                    text: 'Player of the Match Awards',
               },
               stackLabels: {
                    enabled: true,
               },
          },
          legend: {
               reversed: true, // To display the legend in reverse order (top player at the top)
          },
          plotOptions: {
               series: {
                    stacking: 'normal',
               },
          },
          series: seriesData,
     });
}

async function fetchMostDismissedPlayer() {
     const response = await fetch('./output/highestDismissedByAnotherPlayer.json');
     const data = await response.json();

     const pairs = [`${data.batsman} - ${data.maxDismissalsByBowler[0]}`];
     const dissmisalCount = [data.maxDismissals];

     Highcharts.chart('chart-8', {
          chart: {
               type: 'column',
          },
          title: {
               text: 'Players who have dismissed maximum times by bowler',
          },
          subtitle: {
               text: 'Source: IPL Project',
          },
          xAxis: {
               categories: pairs,
               crosshair: true,
               title: {
                    text: 'pair',
               },
          },
          yAxis: {
               min: 0,
               title: {
                    text: 'number of dismissals',
               },
          },
          plotOptions: {
               column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
               },
          },
          series: [
               {
                    name: 'dismissals',
                    data: dissmisalCount,
               },
          ],
     });
}
async function fetchMostEconomicSuperOversBowler() {
     const response = await fetch('./output/bowlerWithBestEconomySuperover.json');
     const data = await response.json();

     const bowler = [data.bestBowlerInSuperOver[0]];
     const economy = [data.bestEconomyInSuperOver];

     Highcharts.chart('chart-9', {
          chart: {
               type: 'column',
          },
          title: {
               text: 'The bowler with the best economy in super overs',
          },
          xAxis: {
               categories: bowler,
               crosshair: true,
               title: {
                    text: 'Player',
               },
          },
          yAxis: {
               min: 0,
               title: {
                    text: 'Economy in super over',
               },
          },
          tooltip: {
               headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
               pointFormat:
                    '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
               footerFormat: '</table>',
               shared: true,
               useHTML: true,
          },
          plotOptions: {
               column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
               },
          },
          series: [
               {
                    name: 'Economy',
                    data: economy,
               },
          ],
     });
}

async function fetchAndPlotBatsmanStrikeRatePerSeason() {
     const response = await fetch('./output/batsmanStrikeRatePerSeason.json');
     const data = await response.json();

     const years = Object.keys(data);
     const players = new Set();

     for (const year in data) {
          for (const player in data[year]) {
               players.add(player);
          }
     }

     const seriesData = Array.from(players).map((player) => ({
          name: player,
          data: years.map((year) => {
               const playerData = data[year][player];
               return playerData ? playerData.totalRuns : 0;
          }),
     }));

     Highcharts.chart('chart-7', {
          chart: {
               type: 'column',
          },
          subtitle: {
               text: 'Source: IPL Project',
          },
          title: {
               text: 'Player Performance Per Year',
               style: {
                    fontSize: '18px',
                    color: '#333',
               },
          },
          xAxis: {
               title: {
                    text: 'Year',
                    style: {
                         fontSize: '14px',
                         color: '#333',
                    },
               },
          },
          yAxis: {
               title: {
                    text: 'Total Runs',
                    style: {
                         fontSize: '14px',
                         color: '#333',
                    },
               },
          },
          tooltip: {
               headerFormat: '<span style="font-size: 12px">{point.key}</span><br/>',
               pointFormat:
                    '<span style="color:{point.color}">{series.name}: <b>{point.y}</b></span><br/>',
          },
          legend: {
               reversed: true,
               itemStyle: {
                    fontSize: '12px',
                    color: '#666',
               },
          },
          plotOptions: {
               column: {
                    stacking: 'normal',
                    borderWidth: 0.5,
                    borderColor: '#ccc',
               },
          },
          series: seriesData,
     });
}

fetchAndPlotMatchesPerYear();
fetchAndPlotMatchesWonTeamPerYear();
fetchAndPlotExtraRunConcededPerTeam();
fetchAndPlotTop10EconomicalBowlers();
fetchAndPlotWonTossWonMatchTeam();
fetchAndPlotHighestNoOfPlayerOfMatch();
fetchMostDismissedPlayer();
fetchMostEconomicSuperOversBowler();
fetchAndPlotBatsmanStrikeRatePerSeason();
