var bugs = [];
var graymousePic;
var blackmousePic;
var brownmousePic;
var whitemousePic;
var bgPic;
var score = 0;
var playing; // aids with asychronous endGame() function
var height = window.innerHeight;
var width = window.innerWidth;
var speed; // speed at which the bugs travel
var bugChance; // chance of a new bug being pushed
var gameLife; //
var cheese;
var loadingMTM;
var loadingMTMTime = 500;
var myFont;
var blackBG;
var exitHowto = false;
var howToImage;
var exitImage;
var exit;
var silverTrophy;
var scoreSubmitted = false;
var cheeseImage = 0;

//These are the variables for the cheese poofAnimation
var cA1,cA2,cA3,cA4,cA5,cA6,cA7,cA8,cA9,cA10,cA11,cA12,cA13,cA14,cA15,cA16,cA17,cA18,cA19,cA20,
cA21,cA22,cA23,cA24,cA25,cA26,cA27,cA28,cA29,cA30,cA31,cA32,cA33,cA34,cA35,cA36,cA37,cA38,cA39,cA40,
cA41,cA42,cA43,cA44,cA45,cA46,cA47,cA48,cA49,cA50,cA51,cA52,cA53,cA54,cA55,cA56,cA57,cA58,cA59,cA60;
var equalcA;

var loadingImage = 0;
var lA1,lA2,lA3,lA4,lA5,lA6,lA7,lA8,lA9,lA10,lA11,lA12,lA13,lA14,lA15,lA16,lA17,lA18,lA19,lA20,
lA21,lA22,lA23,lA24,lA25,lA26,lA27,lA28,lA29,lA30,lA31,lA32,lA33,lA34,lA35,lA36,lA37,lA38,lA39,lA40,
lA41,lA42,lA43,lA44,lA45,lA46,lA47,lA48,lA49,lA50,lA51,lA52,lA53,lA54,lA55,lA56,lA57,lA58,lA59,lA60;
var equallA;

var poofImage = 0;
var pA1,pA2,pA3,pA4,pA5,pA6,pA7,pA8,pA9,pA10,pA11,pA12,pA13,pA14,pA15,pA16,pA17,pA18,pA19,pA20,
pA21,pA22,pA23,pA24,pA25,pA26,pA27,pA28,pA29,pA30,pA31,pA32,pA33,pA34,pA35,pA36,pA37,pA38,pA39,pA40,
pA41,pA42,pA43,pA44,pA45,pA46,pA47,pA48,pA49,pA50,pA51,pA52,pA53,pA54,pA55,pA56,pA57,pA58,pA59,pA60;
var equalpA;

var gTrophyImage = 0;
var gtA1,gtA2,gtA3,gtA4,gtA5,gtA6,gtA7,gtA8,gtA9,gtA10,gtA11,gtA12,gtA13,gtA14,gtA15,gtA16,gtA17,gtA18,gtA19,gtA20,
gtA21,gtA22,gtA23,gtA24,gtA25,gtA26,gtA27,gtA28,gtA29,gtA30,gtA31,gtA32,gtA33,gtA34,gtA35,gtA36,gtA37,gtA38,gtA39,gtA40;
var equalgtA;
var database;
let highscore = localStorage.getItem('HighScore');
var bronzeUnlocked;
function gotData(data) {
console.log(data.val());
var scores = data.val();
var keys = Object.keys(scores);
console.log(keys);
}
function errData(err) {
console.log('Error!');
console.log(err);
}


var hiddentrophy1;
var hiddentrophy2;
var hiddentrophy3;
var vehicles = [];
var vehicles1 = [];
var logo;
function preload(){
  myFont = loadFont('AvenirNextLTPro-Demi.otf');

}
function setup() {
	  const canvasElt = createCanvas(window.innerWidth, window.innerHeight).elt;
	  canvasElt.style.width = '100%', canvasElt.style.height = '100%';

  background(0100);

console.log(highscore);
var config = {
  apiKey: "AIzaSyB7IfLpKq6WkRnuBZ9f0OdVhiHOGauQ1XU",
      authDomain: "mtm-catcher.firebaseapp.com",
      databaseURL: "https://mtm-catcher.firebaseio.com",
      projectId: "mtm-catcher",
      storageBucket: "mtm-catcher.appspot.com",
      messagingSenderId: "146113387232"
};

firebase.initializeApp(config);
database = firebase.database();
var ref = database.ref('scores');
ref.on('value', gotData, errData);


logo = loadImage("invertlogo.png");
  graymousePic = loadImage("mouse.png");
  cheese = loadImage("cheese.png");
  blackmousePic = loadImage("blackmouse.png");
  brownmousePic = loadImage("brownmouse.png");
  whitemousePic = loadImage("whitemouse.png");
  blackBG = loadImage("blackBG.png");
  howToImage = loadImage("howTo.png");
  exitImage = loadImage("exit.png");
  exit = new Exit();
  bgPic = loadImage("bg.png");
silverTrophy - loadImage("silverTrophy.png");
gameLife = 3;
  playing = true;
	speed = 3;
	bugChance = 0.4;
  textSize(30);
   hiddentrophy1 = loadImage("hiddenTrophy.png");
   hiddentrophy3 = hiddentrophy2 = hiddentrophy1;
bronzeUnlocked = loadImage("bronzeTrophy.png");
  cA1 = loadImage("cheeseAnimation/10001.png"), cA11 = loadImage("cheeseAnimation/10011.png"),
  cA2 = loadImage("cheeseAnimation/10002.png"), cA12 = loadImage("cheeseAnimation/10012.png"),
  cA3 = loadImage("cheeseAnimation/10003.png"), cA13 = loadImage("cheeseAnimation/10013.png"),
  cA4 = loadImage("cheeseAnimation/10004.png"), cA14 = loadImage("cheeseAnimation/10014.png"),
  cA5 = loadImage("cheeseAnimation/10005.png"), cA15 = loadImage("cheeseAnimation/10015.png"),
  cA6 = loadImage("cheeseAnimation/10006.png"), cA16 = loadImage("cheeseAnimation/10016.png"),
  cA7 = loadImage("cheeseAnimation/10007.png"), cA17 = loadImage("cheeseAnimation/10017.png"),
  cA8 = loadImage("cheeseAnimation/10008.png"), cA18 = loadImage("cheeseAnimation/10018.png"),
  cA9 = loadImage("cheeseAnimation/10009.png"), cA19 = loadImage("cheeseAnimation/10019.png"),
  cA10 = loadImage("cheeseAnimation/10010.png"), cA20 = loadImage("cheeseAnimation/10020.png"),
  cA21 = loadImage("cheeseAnimation/10021.png"), cA31 = loadImage("cheeseAnimation/10031.png"),
  cA22 = loadImage("cheeseAnimation/10022.png"), cA32 = loadImage("cheeseAnimation/10032.png"),
  cA23 = loadImage("cheeseAnimation/10023.png"), cA33 = loadImage("cheeseAnimation/10033.png"),
  cA24 = loadImage("cheeseAnimation/10024.png"), cA34 = loadImage("cheeseAnimation/10034.png"),
  cA25 = loadImage("cheeseAnimation/10025.png"), cA35 = loadImage("cheeseAnimation/10035.png"),
  cA26 = loadImage("cheeseAnimation/10026.png"), cA36 = loadImage("cheeseAnimation/10036.png"),
  cA27 = loadImage("cheeseAnimation/10027.png"), cA37 = loadImage("cheeseAnimation/10037.png"),
  cA28 = loadImage("cheeseAnimation/10028.png"), cA38 = loadImage("cheeseAnimation/10038.png"),
  cA29 = loadImage("cheeseAnimation/10029.png"), cA39 = loadImage("cheeseAnimation/10039.png"),
  cA30 = loadImage("cheeseAnimation/10030.png"), cA40 = loadImage("cheeseAnimation/10040.png"),
  cA41 = loadImage("cheeseAnimation/10041.png"), cA51 = loadImage("cheeseAnimation/10051.png"),
  cA42 = loadImage("cheeseAnimation/10042.png"), cA52 = loadImage("cheeseAnimation/10052.png"),
  cA43 = loadImage("cheeseAnimation/10043.png"), cA53 = loadImage("cheeseAnimation/10053.png"),
  cA44 = loadImage("cheeseAnimation/10044.png"), cA54 = loadImage("cheeseAnimation/10054.png"),
  cA45 = loadImage("cheeseAnimation/10045.png"), cA55 = loadImage("cheeseAnimation/10055.png"),
  cA46 = loadImage("cheeseAnimation/10046.png"), cA56 = loadImage("cheeseAnimation/10056.png"),
  cA47 = loadImage("cheeseAnimation/10047.png"), cA57 = loadImage("cheeseAnimation/10057.png"),
  cA48 = loadImage("cheeseAnimation/10048.png"), cA58 = loadImage("cheeseAnimation/10058.png"),
  cA49 = loadImage("cheeseAnimation/10049.png"), cA59 = loadImage("cheeseAnimation/10059.png"),
  cA50 = loadImage("cheeseAnimation/10050.png"), cA60 = loadImage("cheeseAnimation/10060.png");

  pA1 = loadImage("poofAnimation/10001.png"), pA11 = loadImage("poofAnimation/10011.png"),
  pA2 = loadImage("poofAnimation/10002.png"), pA12 = loadImage("poofAnimation/10012.png"),
  pA3 = loadImage("poofAnimation/10003.png"), pA13 = loadImage("poofAnimation/10013.png"),
  pA4 = loadImage("poofAnimation/10004.png"), pA14 = loadImage("poofAnimation/10014.png"),
  pA5 = loadImage("poofAnimation/10005.png"), pA15 = loadImage("poofAnimation/10015.png"),
  pA6 = loadImage("poofAnimation/10006.png"), pA16 = loadImage("poofAnimation/10016.png"),
  pA7 = loadImage("poofAnimation/10007.png"), pA17 = loadImage("poofAnimation/10017.png"),
  pA8 = loadImage("poofAnimation/10008.png"), pA18 = loadImage("poofAnimation/10018.png"),
  pA9 = loadImage("poofAnimation/10009.png"), pA19 = loadImage("poofAnimation/10019.png"),
  pA10 = loadImage("poofAnimation/10010.png"),pA20 = loadImage("poofAnimation/10020.png"),
  pA21 = loadImage("poofAnimation/10021.png"),pA31 = loadImage("poofAnimation/10031.png"),
  pA22 = loadImage("poofAnimation/10022.png"),pA32 = loadImage("poofAnimation/10032.png"),
  pA23 = loadImage("poofAnimation/10023.png"),pA33 = loadImage("poofAnimation/10033.png"),
  pA24 = loadImage("poofAnimation/10024.png"),pA34 = loadImage("poofAnimation/10034.png"),
  pA25 = loadImage("poofAnimation/10025.png"),pA35 = loadImage("poofAnimation/10035.png"),
  pA26 = loadImage("poofAnimation/10026.png"),pA36 = loadImage("poofAnimation/10036.png"),
  pA27 = loadImage("poofAnimation/10027.png"),pA37 = loadImage("poofAnimation/10037.png"),
  pA28 = loadImage("poofAnimation/10028.png"),pA38 = loadImage("poofAnimation/10038.png"),
  pA29 = loadImage("poofAnimation/10029.png"), pA39 = loadImage("poofAnimation/10039.png"),
  pA30 = loadImage("poofAnimation/10030.png"), pA40 = loadImage("poofAnimation/10040.png"),
  pA41 = loadImage("poofAnimation/10041.png"), pA51 = loadImage("poofAnimation/10051.png"),
  pA42 = loadImage("poofAnimation/10042.png"), pA52 = loadImage("poofAnimation/10052.png"),
  pA43 = loadImage("poofAnimation/10043.png"), pA53 = loadImage("poofAnimation/10053.png"),
  pA44 = loadImage("poofAnimation/10044.png"), pA54 = loadImage("poofAnimation/10054.png"),
  pA45 = loadImage("poofAnimation/10045.png"), pA55 = loadImage("poofAnimation/10055.png"),
  pA46 = loadImage("poofAnimation/10046.png"), pA56 = loadImage("poofAnimation/10056.png"),
  pA47 = loadImage("poofAnimation/10047.png"), pA57 = loadImage("poofAnimation/10057.png"),
  pA48 = loadImage("poofAnimation/10048.png"), pA58 = loadImage("poofAnimation/10058.png"),
  pA49 = loadImage("poofAnimation/10049.png"), pA59 = loadImage("poofAnimation/10059.png"),
  pA50 = loadImage("poofAnimation/10050.png"), pA60 = loadImage("poofAnimation/10060.png");

  lA1 = loadImage("loadingAnimation/10001.png"), lA11 = loadImage("loadingAnimation/10011.png"),
  lA2 = loadImage("loadingAnimation/10002.png"), lA12 = loadImage("loadingAnimation/10012.png"),
  lA3 = loadImage("loadingAnimation/10003.png"), lA13 = loadImage("loadingAnimation/10013.png"),
  lA4 = loadImage("loadingAnimation/10004.png"), lA14 = loadImage("loadingAnimation/10014.png"),
  lA5 = loadImage("loadingAnimation/10005.png"), lA15 = loadImage("loadingAnimation/10015.png"),
  lA6 = loadImage("loadingAnimation/10006.png"), lA16 = loadImage("loadingAnimation/10016.png"),
  lA7 = loadImage("loadingAnimation/10007.png"), lA17 = loadImage("loadingAnimation/10017.png"),
  lA8 = loadImage("loadingAnimation/10008.png"), lA18 = loadImage("loadingAnimation/10018.png"),
  lA9 = loadImage("loadingAnimation/10009.png"), lA19 = loadImage("loadingAnimation/10019.png"),
  lA10 = loadImage("loadingAnimation/10010.png"),lA20 = loadImage("loadingAnimation/10020.png"),
  lA21 = loadImage("loadingAnimation/10021.png"),lA31 = loadImage("loadingAnimation/10031.png"),
  lA22 = loadImage("loadingAnimation/10022.png"),lA32 = loadImage("loadingAnimation/10032.png"),
  lA23 = loadImage("loadingAnimation/10023.png"),lA33 = loadImage("loadingAnimation/10033.png"),
  lA24 = loadImage("loadingAnimation/10024.png"),lA34 = loadImage("loadingAnimation/10034.png"),
  lA25 = loadImage("loadingAnimation/10025.png"),lA35 = loadImage("loadingAnimation/10035.png"),
  lA26 = loadImage("loadingAnimation/10026.png"),lA36 = loadImage("loadingAnimation/10036.png"),
  lA27 = loadImage("loadingAnimation/10027.png"),lA37 = loadImage("loadingAnimation/10037.png"),
  lA28 = loadImage("loadingAnimation/10028.png"),lA38 = loadImage("loadingAnimation/10038.png"),
  lA29 = loadImage("loadingAnimation/10029.png"), lA39 = loadImage("loadingAnimation/10039.png"),
  lA30 = loadImage("loadingAnimation/10030.png"), lA40 = loadImage("loadingAnimation/10040.png"),
  lA41 = loadImage("loadingAnimation/10041.png"), lA51 = loadImage("loadingAnimation/10051.png"),
  lA42 = loadImage("loadingAnimation/10042.png"), lA52 = loadImage("loadingAnimation/10052.png"),
  lA43 = loadImage("loadingAnimation/10043.png"), lA53 = loadImage("loadingAnimation/10053.png"),
  lA44 = loadImage("loadingAnimation/10044.png"), lA54 = loadImage("loadingAnimation/10054.png"),
  lA45 = loadImage("loadingAnimation/10045.png"), lA55 = loadImage("loadingAnimation/10055.png"),
  lA46 = loadImage("loadingAnimation/10046.png"), lA56 = loadImage("loadingAnimation/10056.png"),
  lA47 = loadImage("loadingAnimation/10047.png"), lA57 = loadImage("loadingAnimation/10057.png"),
  lA48 = loadImage("loadingAnimation/10048.png"), lA58 = loadImage("loadingAnimation/10058.png"),
  lA49 = loadImage("loadingAnimation/10049.png"), lA59 = loadImage("loadingAnimation/10059.png"),
  lA50 = loadImage("loadingAnimation/10050.png"), lA60 = loadImage("loadingAnimation/10060.png");

  gtA1 = loadImage("gTrophyAnimation/10001.png"), gtA11 = loadImage("gTrophyAnimation/10011.png"),
  gtA2 = loadImage("gTrophyAnimation/10002.png"), gtA12 = loadImage("gTrophyAnimation/10012.png"),
  gtA3 = loadImage("gTrophyAnimation/10003.png"), gtA13 = loadImage("gTrophyAnimation/10013.png"),
  gtA4 = loadImage("gTrophyAnimation/10004.png"), gtA14 = loadImage("gTrophyAnimation/10014.png"),
  gtA5 = loadImage("gTrophyAnimation/10005.png"), gtA15 = loadImage("gTrophyAnimation/10015.png"),
  gtA6 = loadImage("gTrophyAnimation/10006.png"), gtA16 = loadImage("gTrophyAnimation/10016.png"),
  gtA7 = loadImage("gTrophyAnimation/10007.png"), gtA17 = loadImage("gTrophyAnimation/10017.png"),
  gtA8 = loadImage("gTrophyAnimation/10008.png"), gtA18 = loadImage("gTrophyAnimation/10018.png"),
  gtA9 = loadImage("gTrophyAnimation/10009.png"), gtA19 = loadImage("gTrophyAnimation/10019.png"),
  gtA10 = loadImage("gTrophyAnimation/10010.png"),gtA20 = loadImage("gTrophyAnimation/10020.png"),
  gtA21 = loadImage("gTrophyAnimation/10021.png"),gtA31 = loadImage("gTrophyAnimation/10031.png"),
  gtA22 = loadImage("gTrophyAnimation/10022.png"),gtA32 = loadImage("gTrophyAnimation/10032.png"),
  gtA23 = loadImage("gTrophyAnimation/10023.png"),gtA33 = loadImage("gTrophyAnimation/10033.png"),
  gtA24 = loadImage("gTrophyAnimation/10024.png"),gtA34 = loadImage("gTrophyAnimation/10034.png"),
  gtA25 = loadImage("gTrophyAnimation/10025.png"),gtA35 = loadImage("gTrophyAnimation/10035.png"),
  gtA26 = loadImage("gTrophyAnimation/10026.png"),gtA36 = loadImage("gTrophyAnimation/10036.png"),
  gtA27 = loadImage("gTrophyAnimation/10027.png"),gtA37 = loadImage("gTrophyAnimation/10037.png"),
  gtA28 = loadImage("gTrophyAnimation/10028.png"),gtA38 = loadImage("gTrophyAnimation/10038.png"),
  gtA29 = loadImage("gTrophyAnimation/10029.png"), gtA39 = loadImage("gTrophyAnimation/10039.png"),
  gtA30 = loadImage("gTrophyAnimation/10030.png"), gtA40 = loadImage("gTrophyAnimation/10040.png");

  var points = myFont.textToPoints('MOUSETRAP', width/2-470, height/2, 150, {
      sampleFactor: 0.25
    });

    var points1 = myFont.textToPoints('MONDAY', width/2-350, height/2+200, 150, {
        sampleFactor: 0.25
      });

      for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
        // stroke(255);
        // strokeWeight(8);
        // point(pt.x, pt.y);
      }
      for (var i = 0; i < points1.length; i++) {
        var pt = points1[i];
        var vehicle1 = new Vehicle1(pt.x, pt.y);
        vehicles1.push(vehicle1);
        // stroke(255);
        // strokeWeight(8);
        // point(pt.x, pt.y);
      }
}

function draw() {
  if (playing) {


    if (loadingImage < 400) {

      background("#000000");
       loadingImage++;
image(logo, 20, height/2-350, 600, 200);
for (var i = 0; i < vehicles.length; i++) {
  var v = vehicles[i];
  v.behaviors();
  v.update();
  v.show();
}
for (var i = 0; i < vehicles1.length; i++) {
  var v1 = vehicles1[i];
  v1.behaviors();
  v1.update();
  v1.show();
}

} else if (loadingImage == 400 && !exitHowto) {
    image(bgPic,0,0,width,height);
    image(howToImage,40,400,width-75,800);

    image(exitImage, width-100 ,height/4, 75, 75);
    fill(255);
    noStroke();
    textSize(75);
    textAlign(CENTER);
    textFont(myFont);
    text("MOUSE TRAP", width / 2, 100);
    text("MONDAY", width / 2, 200);
    if (exit.isClicked(mouseX, mouseY) && !exitHowto) {
          exitHowto = true;
  }
  }
    else if (exitHowto == true) {
      cheeseImage++;
      if (cheeseImage == 60) {
        cheeseImage = 0;
      }
      image(bgPic,0,0,width,height);
      handleBugs();
      attemptNewBug(frameCount);
      handleDifficulty(frameCount, score);
      drawScore();
      gameOver(playing);
      checkImage();

  image(cheese, 0, window.innerHeight-290, 250,250);
  fill("#000000");
  text(gameLife, 125, window.innerHeight-85);
  poofImage+=4;
  checkImage();
  image(equalpA, mouseX-150, mouseY-150, 300, 300);

    }
  } else {

  }

}


/**
 * handles user input
 * squashes bugs
 */
function mousePressed() {
poofImage = 0;
  for (var i = 0; i < bugs.length; i++) {

		// update bug's state
    bugs[i].squashed = bugs[i].squashedBy(mouseX, mouseY);

		// if the bug is good, end the game
    if (bugs[i].squashed && bugs[i].type)
      gameLife = gameLife + 1;
    }

}

/**
 * updates and draws bugs
 * handles off-screen bugs
 * handles bugs array
 */
function handleBugs() {
if (playing) {
  for (var i = bugs.length - 1; i >= 0; i--) {

		/* update & draw */
    bugs[i].update();
    bugs[i].draw();

    if (bugs[i].position.y > height && !bugs[i].type) {
			// if the bug is off the screen and it's a bad bug
      gameLife--;
      bugs.splice(i, 1);

      if (gameLife <=0) {
        endGame();
      }
		}

    if (bugs[i].squashed) {
			// remove from bugs array

      bugs.splice(i, 1);
      score++;

    }
  }
} else {

}
}

/**
 * attempts to push a new bug
 */
function attemptNewBug(frame) {

	if (frame % 60 === 0) { // every second

		if (random() < bugChance) { // probability of a new bug

			var x = random(width / 2) + width / 4; // only in the middle
			var type = (random() > 0.990); // good or bad bug
			bugs.push(new Insect(x, type));
		}
	}
}

/**
 * variables pertaining to difficulty
 * is set based upon frame and score
 */
function handleDifficulty(frame, score) {

	if (frame % 30 === 0) {
		// update once every half second

		bugChance = map(score, 0, 500, 0.4, 5);
		speed = map(score, 0, 500, 3, 30);
	}
}

/**
 * draws game over message
 */
function gameOver(playing) {

	if (!playing) {
		// only if the game has ende

  }
}

/**
 * draws the score
 */
function drawScore() {
  if (!playing) {
  } else{
  /* draw score */
  fill(255);
  noStroke();
  text(score, width/2, 200);
  textAlign(CENTER);
  textSize(200);
  textFont(myFont);
}
}

/**
 * stops the loop, triggers game over
 */
function endGame() {
  playing = false;
  setInterval(showGoldenTrophy, 30); // call doSomething every 3 seconds

  noLoop();

}
function showGoldenTrophy(){

  image(blackBG,30,440, width-60, 900);
  image(hiddentrophy1,width/2-360,height/2+150,200,200);
  image(hiddentrophy2,width/2-100,height/2+150,200,200);
  image(hiddentrophy3,width/2+160,height/2+150,200,200);

  fill("#CF2000");
  stroke("#000000");
  textSize(110);
  textAlign(CENTER);
  textFont(myFont);

  text("Game Over!", width/2, 600);

  if (score > highscore) {
    textSize(150);
    strokeWeight(10);
    stroke("#000000");
    fill("#FCF90D");
    text("New", width/2, 175);
    text("High Score!", width/2, 305);
    text(score, width/2, 430);
    if (scoreSubmitted == false) {
      submitScore();
  scoreSubmitted = true;
    }
  } else {
    textSize(150);
    strokeWeight(10);
    stroke("#000000");
    fill("#61FF33");
    text("Your", width/2, 175);
    text("Score!", width/2, 305);
    text(score, width/2, 430);
  }

  // prevent division by zero
  if (score < 1) {
    textSize(100);

    textAlign(CENTER);
    text("No Trophy", width/2, 750);
    text("Try Again!", width/2, 850);
  }

  if (score >5) {
    gTrophyImage++;
  checkImage();

  image(equalgtA,width/2-200,height/2-250,400,400);
  if (gTrophyImage == 40) {
    gTrophyImage = 22;

  }}

}
function submitScore(){
  localStorage.setItem('HighScore', score);
var data = {
  score: score
}
var ref = database.ref('scores');
var result = ref.push(data);
console.log(result.key);
}
