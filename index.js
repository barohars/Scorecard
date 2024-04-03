const homePoints = document.getElementById("home-points");
const awayPoints = document.getElementById("away-points");

let pointsOfHome = 0;
let pointsOfAway = 0;

function homeOnePoint(){
    pointsOfHome += 1;
    homePoints.textContent = pointsOfHome ;
}

function homeTwoPoint(){
    pointsOfHome += 2;
    homePoints.textContent = pointsOfHome ;
}

function homeThreePoint(){
    pointsOfHome += 2;
    homePoints.textContent = pointsOfHome ;
}

function awayOnePoint(){
    pointsOfAway += 1;
    awayPoints.textContent = pointsOfAway ;
}

function awayTwoPoint(){
    pointsOfAway += 2;
    awayPoints.textContent = pointsOfAway ;
}

function awayThreePoint(){
    pointsOfAway += 2;
    awayPoints.textContent = pointsOfAway ;
}