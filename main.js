var username = document.getElementById("username");
var continuebtn = document.getElementById("continuebtn");
var getname = document.getElementById("mainrulesnamediv");
var sidebarScreen = document.getElementById("main-screen-output");
var questionScreendiv = document.getElementById("questionScreen");
var timerStartnow = questionScreendiv.querySelector(".secdiv .timerStart");
var timeLinestart = questionScreendiv.querySelector(".timeLine");
var nextQuestionBtnid = document.getElementById("nextQuestionBtn");

continuebtn.addEventListener("click", questionScreen);

function questionScreen() {
  var inputValue = document.getElementById("usergetname").value.trim();
  if (!inputValue == "") {
    username.innerHTML = inputValue;
    getname.classList.add("getname-activeNone");
    sidebarScreen.classList.add("sidebar-screen-active");
    questionScreendiv.classList.add("question-screen-active");
    // winnerQuestion.classList.add("main-screen-active");
    showTotalComques(1);
    showQuestions(0);
    showTotalCorrectAns(0);
    showTotalIncorrectAns(0);
    timerStartfun(15);
    timelineStartfun(15);
  } else {
    const validInput = document.querySelector(".enterName");
    let nameIs = '<p class="emptyinvaild">Please Enter Your Name</p>';
    validInput.innerHTML = nameIs;
    console.log(validInput);
  }
}

// questionScreen();

let questionCount = 0;
let pendingQuestion = 1;
let showcorans = 0;
let showincorans = 0;
let counter;
let timerEndnow = 15;
let timeLineEnd = 15;

var nextBtnQues = questionScreendiv.querySelector(".nextbt");
var winnerDiv = document.querySelector(".winner-div");
var restartQuizBtn = winnerDiv.querySelector(".restartQuiz");

nextBtnQues.onclick = () => {
  if (questionCount < numberOfQuestion.length - 1) {
    questionCount++;
    pendingQuestion++;
    showQuestions(questionCount);
    showTotalComques(pendingQuestion);
    clearInterval(counter);
    timerStartfun(timerEndnow);
    clearInterval(counterLine);
    timelineStartfun(timeLineEnd);
  } else {
    console.log("question complete");
    showWinnerBox();
  }
  nextQuestionBtnid.style.display = "none";
};

const optionDiv = document.querySelector(".optiondiv");

function showQuestions(index) {
  // question tag
  const questext = document.querySelector(".mainquestion");
  let quesTag =
    '<p class="question">' +
    numberOfQuestion[index].questionNumber +
    " " +
    numberOfQuestion[index].question +
    "</p>";
  // option tag
  let optionTag =
    '<div class="option"><span class="optionText">' +
    numberOfQuestion[index].option[0] +
    "</span></div>" +
    '<div class="option"><span class="optionText">' +
    numberOfQuestion[index].option[1] +
    "</span></div>" +
    '<div class="option"><span class="optionText">' +
    numberOfQuestion[index].option[2] +
    "</span></div>" +
    '<div class="option"><span class="optionText">' +
    numberOfQuestion[index].option[3] +
    "</span></div>";
  questext.innerHTML = quesTag;
  optionDiv.innerHTML = optionTag;
  const optionSerAtt = optionDiv.querySelectorAll(".option");
  for (let i = 0; i < optionSerAtt.length; i++) {
    optionSerAtt[i].setAttribute("onclick", "selectOption(this)");
  }
}

function selectOption(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAnswer = answer.textContent;
  let correctAnswerquiz = numberOfQuestion[questionCount].correctAnswer;
  let disbleOption = optionDiv.children.length;
  if (userAnswer == correctAnswerquiz) {
    answer.classList.add("correct");
    showcorans++;
    showTotalCorrectAns(showcorans);
    
  } else {
    answer.classList.add("incorrect");
    showincorans++;
    showTotalIncorrectAns(showincorans);

    // if answer is incorrect then automatic show correct answer
    for (let i = 0; i < disbleOption; i++) {
      if (optionDiv.children[i].textContent == correctAnswerquiz) {
        optionDiv.children[i].setAttribute("class", "option correct");
      }
    }
  }

  for (let i = 0; i < disbleOption; i++) {
    optionDiv.children[i].classList.add("disabled");
  }

  nextQuestionBtnid.style.display = "block";
}

restartQuizBtn.onclick = () => {
  // reStartQuiz();
  window.location.reload();
};

function showWinnerBox() {
  getname.classList.add("getname-activeNone");
  questionScreendiv.classList.remove("question-screen-active");
  winnerDiv.classList.remove("winner-div");
}

function reStartQuiz() {
  getname.classList.add("getname-activeNone");
  questionScreendiv.classList.add("question-screen-active");
  winnerDiv.classList.add("winner-div");
}

function timerStartfun(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timerStartnow.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      timerStartnow.textContent = "00";
      optionDiv.classList.add("disabled");
    }
    else {
      optionDiv.classList.remove("disabled");

    }
  }
}

function timelineStartfun(time) {
  counterLine = setInterval(timer, 32);
  function timer() {
    time += 1;
    timeLinestart.style.width = time + "px";
    if (time > 574) {
      clearInterval(counterLine);
      nextQuestionBtnid.style.display = "block";
    }
  }
}

function showTotalComques(index) {
  const totalQuestion = document.querySelector(".totalQuestion");
  let showComques =
    '<span class="firstDigi">' +
    index +
    '</span>/<span class="secondDigi">' +
    numberOfQuestion.length +
    "</span>";
  totalQuestion.innerHTML = showComques;

}

function winnerImg (showImg){
  let winImg = document.querySelector(".mainwinerdiv");
  imgSrc = ["smile.png", "winner.png"];
  console.log(imgSrc);

  if(showImg > 2){
    showImgsrc = `<img src="${imgSrc[1]}" alt="">`;
    console.log(showImgsrc);
    winImg.innerHTML = showImgsrc;
  }
}

function showTotalCorrectAns(index) {
  const correAns = document.querySelector(".correctPans");
  let correctAnsShow =
    '<span class="firstDigi">' + index + '</span>/<span class="secondDigi">' + numberOfQuestion.length + '</span>';
  correAns.innerHTML = correctAnsShow;
  console.log('√');

  const winnerDivShowca = document.querySelector(".winertext");
  var winnerAns =
    `<span class="showGret"> Well done </span><br> You got <span class="correctAns">${index} </span> out <span class="total">${numberOfQuestion.length}</span>`;
  winnerDivShowca.innerHTML = winnerAns;
}


function showTotalIncorrectAns(index) {
  const inCorreAns = document.querySelector(".incCorrectPans");
  let inCorrectAnsShow =
    '<span class="firstDigi">' +
    index +
    '</span>/<span class="secondDigi">' +
    numberOfQuestion.length +
    "</span>";
  inCorreAns.innerHTML = inCorrectAnsShow;
}

