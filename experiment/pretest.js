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
      question: "1. When the tolerance is given on one side of the basic dimension, it is called _________",  ///// Write the question inside double quotes
      answers: {
        a: "Tolerance system",                  ///// Write the option 1 inside double quotes
        b: "Allowance system",                  ///// Write the option 2 inside double quotes
        c: "Unilateral tolerance",                  ///// Write the option 3 inside double quotes
        d: "Bilateral tolerance"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "2. The difference between the maximum and minimum sizes allowed in manufactured components is called _________",  ///// Write the question inside double quotes
      answers: {
        a: "Clearance",                  ///// Write the option 1 inside double quotes
        b: "Allowance",                  ///// Write the option 2 inside double quotes
        c: "Tolerance",                  ///// Write the option 3 inside double quotes
        d: "Limit"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

    {
      question: "3. The measured size of the dimension of the component is called _________ ",
      answers: {
        a: "Basic size",
        b: "Normal size",
        c: "Allowed size",
        d: "None of above"
      },
      correctAnswer: "d"
    },
    
    {
      question: "4. A pin fitted in a hole. The tolerance zone of the pin is entirely above of that hole. The is obtained will be _________",
      answers: {
        a: "Clearance fit",
        b: "Transition fit",
        c: "Interference fit",
        d: "None of above"
      },
      correctAnswer: "c"
    },
        
    {
      question: "5. Bilateral tolerance is fixed _________",
      answers: {
        a: "On upper side of the basic size",
        b: "On lower side of the basic size",
        c: "On any one side of the basic size",
        d: "On both side(Upper and lower ) of the basic size"
      },
      correctAnswer: "d"
    },  

    {
      question: "6. Basic shaft and basic hole are those whose upper deviation and lower deviation respectively are _________",
      answers: {
        a: "+ve, -ve",
        b: "–ve, +ve",
        c: "Zero, Zero",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    
    {
      question: "7. In order to have interference fit, it is essential that the lower limit of the shaft should be _________",
      answers: {
        a: "Greater than the upper limit of the hole.",
        b: "Lesser than the upper limit of the hole.",
        c: "Greater than the lower limit of the hole.",
        d: "Lesser than the lower limit of the hole."
      },
      correctAnswer: "a"
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