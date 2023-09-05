
const matchesPerYear=require('../src/server/matches-per-year');

const matchesData=[
    {season:'2013'},
    {season:'2013'},
    {season:'2014'},
    { season:'2015'},
    { season:'2015'},
    { season:'2016'},
    { season:'2017'},
   ]
   const result=matchesPerYear(matchesData);

test('it should contain no of counts of matches with year',()=>{
    
   expect(result).toEqual(
    {
        "2013": 2,
        "2014": 1,
        "2015": 2,
        "2016": 1,
        "2017": 1
    });
});
