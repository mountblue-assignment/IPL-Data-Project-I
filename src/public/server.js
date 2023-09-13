

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
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:1f} times</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
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
                   data:runs,
              },
         ],
    });
}

async function fetchAndPlotTop10EconomicalBowlers(){

    const response =await fetch('./output/top10EconomicalBowlers.json');
    const data = await response.json();
    const bowlers=Object.keys(data);
    const economies = bowlers.map((bowler)=>Number(data[bowler].economy));
   
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
                  data:economies,
             },
        ],
   });

}

async function fetchAndPlotWonTossWonMatchTeam(){

    const response = await fetch('./output/wonTossWonMatchTeam.json');
    const data = await response.json();
   
     const teams=Object.keys(data);
     const matches=Object.values(data);
   

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
                  data:matches,
             },
        ],
   });
}

async function fetchAndPlotHighestNoOfPlayerOfMatch(){
   const response = await fetch('./output/highestNoOfPlayerOfMatch.json');
   const data = await response.json();

    const seasons = Object.keys(data);

     const batsman=Object.values(data);
     

     Highcharts.chart('chart-6', {
        chart: {
             type: 'column',
        },
        title: {
             text: 'Highest Number of Player Of Match',
        },
        subtitle: {
             text: 'Source: IPL Project',
        },
        xAxis: {
             categories: seasons,
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
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:1f} times</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
        plotOptions: {
             column: {
                  pointPadding: 0.2,
                  borderWidth: 0,
             },
        },
        series: [],
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
           pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
               '<td style="padding:0"><b>{point.y:1f} times</b></td></tr>',
           footerFormat: '</table>',
           shared: true,
           useHTML: true
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

async function findMostDismissedPlayer() {
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
  async function findMostEconomicSuperOversBowler() {
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

fetchAndPlotMatchesPerYear();
fetchAndPlotMatchesWonTeamPerYear();
fetchAndPlotExtraRunConcededPerTeam();
fetchAndPlotTop10EconomicalBowlers();
// fetchAndPlotWonTossWonMatchTeam();
// fetchAndPlotHighestNoOfPlayerOfMatch();
findMostDismissedPlayer();
findMostEconomicSuperOversBowler();

