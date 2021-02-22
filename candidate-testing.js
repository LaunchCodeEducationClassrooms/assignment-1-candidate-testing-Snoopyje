const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["1) Who was the first American woman in space? ","2) True or false: 5000 meters = 5 kilometers. ","3) (5 + 3)/2 * 10 = ? ","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","True","40","Trajectory","3"];
let candidateAnswers = 0;
let i = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter the candidate's name ");
console.log("Candidate Name: "+candidateName);
};

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 i=0;
  while(i<5){
candidateAnswer= input.question(questions[i]);
console.log("Your Answer: "+candidateAnswer);
console.log("Correct Answer: "+correctAnswers[i]);
console.log();
if(candidateAnswer==correctAnswers[i]) {
candidateAnswers = candidateAnswers+1;
} else {
  candidateAnswers=candidateAnswers;
};
 i++;
  };
console.log(`>>> Overall Grade: ${candidateAnswers/5*100}% (${candidateAnswers} of 5 responses correct) <<<`);
if(candidateAnswers<4){
console.log(">>> Status: FAILED <<<");
} else {
console.log(">>> Status: PASSED <<<");  
};
return candidateAnswers;
};

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade=0;
  if(correctAnswer == candidateAnswer){
    grade = grade + 1;
    console.log("Correct Answer: "+correctAnswer)
  }; 
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  //gradeQuiz(this.candidateAnswers);
}
return console.log(runProgram());
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};