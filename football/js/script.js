const teams = [
    { name: 'Italy', score: 0, fouls: 0 },
    { name: 'Spain', score: 0, fouls: 0 },
    { name: 'France', score: 0, fouls: 0 }
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let i = 0; i < teams.length; i++) {
    const curTeam= teams[i];
    curTeam.score = getRandomInt(0,10);
    curTeam.fouls = getRandomInt(0,50);
}

console.log (teams)

const newTeams = [];
for(let i = 0; i < teams.length; i++) {
    const curTeam = teams[i];
    const teamInfo = {
        name: curTeam.name,
        fouls: curTeam.fouls
    };
    newTeams.push(teamInfo);
}
console.log(newTeams);