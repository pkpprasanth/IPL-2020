var count = 0;
var runteam1 = [];
var runteam2 = [];
var score1;
var score2;

function play() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    count++;
    console.log("count ", count);
    if (count == 12) {
        document.getElementById('btn').style.visibility = "hidden";
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        score1 = runteam1.reduce(reducer);
        score2 = runteam2.reduce(reducer);
        var teamname1 = document.getElementById("team1").textContent;
        var teamname2 = document.getElementById("team2").textContent;
        if (score1 < score2) {
            document.getElementById("result").innerHTML = teamname2 + " Winner"
        }
        else {
            document.getElementById("result").innerHTML = teamname1 + " Winner"
        }
        document.getElementById('teamname1').innerHTML = teamname1 + "  :  " + score1;
        document.getElementById('teamname2').innerHTML = teamname2 + "  :   " + score2;
        document.getElementById('board').style.visibility = "visible";
    }
    if (count > 6 || count > 11) {
        var name = document.getElementById("team1").textContent;
        runteam1.push(player1(randomNumber))
        document.querySelector('#btn').innerHTML = 'Bat ' + name;
    }
    if (count <= 6) {
        var name = document.getElementById("team2").textContent;
        runteam2.push(player2(randomNumber))
        document.querySelector('#btn').innerHTML = 'Bat ' + name;
    }
}

var index1 = 0;
function player1(randomNumber) {
    var teamOneRunsElement = document.getElementById("team-1").children;
    teamOneRunsElement[index1++].textContent = randomNumber;
    return randomNumber;
}

var index2 = 0;
function player2(randomNumber) {
    var teamOneRunsElement = document.getElementById("team-2").children;
    teamOneRunsElement[index2++].textContent = randomNumber;
    return randomNumber;

}

