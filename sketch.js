var innerball,outerball, bball;
var bx;
var points = 0;
var growthfactor = 0;
var acceleration = 1;
var ballRadius = 150;
var score = 0;

function setup() {
    createCanvas(ballRadius*4,ballRadius*4);
    bx= new boxed(width/2, height/2, floor(ballRadius * 4), color(255,204,0));
    outerball= new ball(width/2, height/2, ballRadius * 4, color(0,0,255));
    bball= new ball(width/2, height/2, ballRadius * 4-25, color(255,255,255));
    innerball= new ball(width/2, height/2, ballRadius, color(255,60,60));
    console.log('starting...');
    this.getAccounts();
}

function draw() {
    background(0);
    bx.show(); 
    outerball.show();
    bball.show();
    innerball.show();
    innerball.growBall(growthfactor*acceleration);
   
   showScore(this.score);
}


function showScore(score) {
    noStroke();
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text('SCORE: ' + score, width / 2, height / 2);
}

function keyPressed() {
    if(keyCode === LEFT_ARROW) growthfactor = 0.01;
    else if(keyCode === RIGHT_ARROW) growthfactor = -0.01 
    else if (keyCode === 32 ) {growthfactor = 0;acceleration*=2;updatePoints();} 
}

function checkDistances() {
    console.log(innerball.ballRadius() , outerball.ballRadius(), acceleration)
    isInside = innerball.ballRadius() <= outerball.ballRadius();
    return isInside;
}

function updatePoints() {
    var isInside = checkDistances();
    if(isInside) {
        points += 1000 - 10*(bball.ballRadius() - innerball.ballRadius());     
        console.log(innerball.ballRadius() > bball.ballRadius());
        points += 10000 * ((innerball.ballRadius() > bball.ballRadius()) ? 1 : 0);     
    } 
    if(isInside) getPoints(points);
    else
        {
        resetGame();
        }
}

function getPoints(points) {
    var url = '/points/?points=' + String(points);
    result = loadJSON(url ,{},"json",showPoints,function(jsresponse) {console.log("error : " + jsresponse)});
}

function ResetPoints() {
    var url = '/resetPoints';
    result = loadJSON(url ,{},"json",showPoints,function(jsresponse) {console.log("error : " + jsresponse)});
}
function showPoints(jsonPoints) {
    console.log('coming back ...' +jsonPoints.TotalPoints );
    //message = 'POINTS: ' + jsonPoints.TotalPoints;
    //document.getElementById('points').innerHTML = "<b>" + message + "</b>";
    this.score = jsonPoints.TotalPoints;
}

function getAccounts() {
    var url = '/Accounts';
    result = loadJSON(url ,{},"json",loadAccounts,function(jsresponse) {console.log("error : " + jsresponse)});
}

function loadAccounts(jsAccounts) {
    console.log('coming back ...' + jsAccounts.accounts );
    accountSelect = document.getElementById('accounts');
    for(i in jsAccounts.accounts) {
        var option = document.createElement("option");
        option.text = jsAccounts.accounts[i];
        accountSelect.add(option);
    }
    document.getElementById('canvas').focus();
}
function resetGame() {
    points = 0;
    acceleration = 1;
    innerball.setRadius(ballRadius);
    score = 0;
    ResetPoints();
    this.showScore('GAME OVER');
    this.sc = 0;
    //document.getElementById('points').innerHTML = "<b>" + message + "</b>";
}



