// given teams data
var teamList = [
    {name: 'GT',points: 20, last5Results:[1,1,0,0,1]},// win is donoted as 1 and loss as 0
    {name: 'LSG',points: 18, last5Results:[1,0,0,1,1]},
    {name: 'RR',points: 16, last5Results:[1,0,1,0,0]},
    {name: 'DC',points: 14, last5Results:[1,1,0,1,0]},
    {name: 'RCB',points: 14, last5Results:[0,1,1,0,0]},
    {name: 'KKR',points: 12, last5Results:[0,1,1,0,1]},
    {name: 'PBKS',points: 12, last5Results:[0,1,0,1,0]},
    {name: 'SRH',points: 12, last5Results:[1,0,0,0,0]},
    {name: 'CSK',points: 08, last5Results:[0,0,1,0,1]},
    {name: 'MI',points: 06, last5Results:[0,1,0,1,1]}
];


class Team{
    constructor(teamName,points,results){
        this.name = teamName;
        this.points = points;
        this.results = results;
        // this.results = typeof results === 'string' || 'number' ? [results] : [...results];
    }

   has2ConsecutiveLosses(){//function of 2 consecutive losses
       var flag=0;
     for(let i=0;i<this.results.length;i++){
        flag=(!this.results[i] || this.results[i]==='loss') ? flag+1 : 0;
        if(flag===2){return true;}
     }
      return false;
   }
}

function TeamsWithConsecutiveLossOrWin(teamsList){// paramter list of team with paritcular data
    var loserTeams = [];
    for(let i=0;i<teamsList.length;i++){
     if(new Team(teamsList[i].name,teamsList[i].points,teamsList[i].last5Results).has2ConsecutiveLosses()) // no parameter for 2 consecutive losses
         loserTeams.push(teamsList[i])
    }
    return loserTeams;
 }
 
 
 console.log('Filtered Teams : ' ,TeamsWithConsecutiveLossOrWin(teamList));// output in console