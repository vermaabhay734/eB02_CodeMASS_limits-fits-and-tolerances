/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Limits of 50 mm hole is es=+0.025 and ei=+.002 mm.The maximum and minimum hole sizes will be:",  ///// Write the question inside double quotes
      answers: {
        a: "Max.  50.02 mm ; Min. 49.998 mm",                  ///// Write the option 1 inside double quotes
        b: "Max. 50.025 mm ; Min. 50.002 mm",                  ///// Write the option 2 inside double quotes
        c: "Max. 49.998 mm ; Min. 50.002 mm",                  ///// Write the option 3 inside double quotes
        d: "Max. 49.990 mm ; Min. 49.975 mm"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "A dimension is stated as 25-0.02+0.02mm in a drawing. What is the tolerance?",  ///// Write the question inside double quotes
      answers: {
        a: "25.00 mm",                  ///// Write the option 1 inside double quotes
        b: "+0.02 mm",                  ///// Write the option 2 inside double quotes
        c: "-0.02 mm",                  ///// Write the option 3 inside double quotes
        d: "0.04 mm"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

    {
      question: "The size of a component is given as 24 -0.1mm. What does -0.1 indicate?",
      answers: {
        a: "Upper deviation is +0.1 mm",
        b: "Lower deviation is 0.0 mm",
        c: "Fundamental deviation is 0.0 mm",
        d: "Lower deviation is -0.1 mm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one among the following is the correct statement?",
      answers: {
        a: "A clearance fit always provides interference.",
        b: "An interference fit always provides clearance.",
        c: "An interference fit may sometime provide clearance and sometime interference.",
        d: "A transition fit may sometime provide clearance and sometime interference."
      },
      correctAnswer: "c"
    },
    {
      question: "Dimension of the hole is 500.00-0.002 mm and shaft is 500.00 +0.002mm.The minimum clearance is",
      answers: {
        a: "0.02 mm",
        b: "0.00 mm",
        c: "-0.02 mm",
        d: "0.01 mm"
      },
      correctAnswer: "c"
    },

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////