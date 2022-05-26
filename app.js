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


class Teams{
    constructor(teamList){
        this.teams = teamList;
    }
    filteredTeam=[];
   has2ConsecutiveLosses(){//function of 2 consecutive losses
     for(let j =0;j<this.teams.length;j++){
     var flag=0;
     for(let i=0;i<this.teams[j].last5Results.length;i++){
        flag=(!this.teams[j].last5Results[i] || this.teams[j].last5Results[i]==='loss') ? flag+1 : 0;
        if(flag===2){this.filteredTeam.push(this.teams[j]);break;}
     }
   }
   return this.filteredTeam;
  }

   hasConsecutiveRecord(n,winOrLoss){//function for n consecutive win or loss. Parameter n is typeof 'number' for number of consecutive win or loss and second  parameter winOrLoss is typeof 'string', to check for win or loss
    for(let j =0;j<this.teams.length;j++){
        var flag=0;
        for(let i=0;i<this.teams[j].last5Results.length;i++){
           flag= this.teams[j].last5Results[i] === winOrLoss ? flag+1 : 0;
           if(flag===n){this.filteredTeam.push(this.teams[j]);break;}
        }
      }
      return this.filteredTeam;
     }
     
}


// fouth requirement
function averagePoints(teams){
    var sum=0;
    for(let i = 0;i<teams.length;i++){
        sum+=teams[i].points
    }
 return sum/teams.length;
}



 
//  second requirement
 console.log('Filtered Teams : ' , new Teams(teamList).has2ConsecutiveLosses());// output in console
// third requirement
 console.log('Filtered Teams With Gernalized method: ' , new Teams(teamList).hasConsecutiveRecord(2,1));// output in console 
// fourth requirement
var team = new Teams(teamList).hasConsecutiveRecord(2,1);
console.log('Average of Filtered Teams: ' , averagePoints(team));// output in console 

