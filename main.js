const questions = [
    {
        "topic": "Algebra",
        "question": "What is the value of x in the equation 3x + 9 = 18?",
        "answers": [
          { "text": "3", "correct": true },
          { "text": "2", "correct": false },
          { "text": "4", "correct": false },
          { "text": "1", "correct": false }
        ]
      },
      {
        "topic": "Algebra",
        "question": "Which of the following is a quadratic equation?",
        "answers": [
          { "text": "x + 1 = 0", "correct": false },
          { "text": "x² + 5x + 6 = 0", "correct": true },
          { "text": "x - 2 = 0", "correct": false },
          { "text": "3x + 4 = 7", "correct": false }
        ]
      },
      {
        "topic": "Geometry",
        "question": "The sum of the interior angles of a triangle is:",
        "answers": [
          { "text": "270°", "correct": false },
          { "text": "360°", "correct": false },
          { "text": "90°", "correct": false },
          { "text": "180°", "correct": true }
          
        ]
      },
      {
        "topic": "Geometry",
        "question": "What is the perimeter of a rectangle with length 10 cm and width 5 cm?",
        "answers": [
          { "text": "30 cm", "correct": false },
          { "text": "20 cm", "correct": false },
          { "text": "25 cm", "correct": true },
          { "text": "15 cm", "correct": false }
        ]
      },
      {
        "topic": "Statistics",
        "question": "What is the median of the following numbers: 3, 7, 5, 9, 11?",
        "answers": [
          { "text": "5", "correct": false },
          { "text": "7", "correct": true },
          { "text": "8", "correct": false },
          { "text": "9", "correct": false }
        ]
      },
      {
        "topic": "Statistics",
        "question": "What is the mode of the following numbers: 1, 2, 2, 3, 4?",
        "answers": [
          { "text": "2", "correct": true},
          { "text": "1", "correct": false },
          { "text": "3", "correct": false },
          { "text": "4", "correct": false }
        ]
      },
      {
        "topic": "Mensuration",
        "question": "What is the area of a triangle with base 10 cm and height 5 cm?",
        "answers": [
          { "text": "25 cm²", "correct": true },
          { "text": "20 cm²", "correct": false },
          { "text": "30 cm²", "correct": false },
          { "text": "15 cm²", "correct": false }
        ]
      },
      {
        "topic": "Mensuration",
        "question": "What is the circumference of a circle with radius 7 cm? (Use π = 22/7)",
        "answers": [
          { "text": "14 cm", "correct": false },
          { "text": "22 cm", "correct": false },
          { "text": "44 cm", "correct": true },
          { "text": "28 cm", "correct": false }
        ]
      },
      {
        "topic": "Probability",
        "question": "If two coins are tossed, what is the probability of getting at least one head?",
        "answers": [
          { "text": "1/4", "correct": false },
          { "text": "3/4", "correct": true },
          { "text": "1/2", "correct": false },
          { "text": "1", "correct": false }
        ]
      },
      {
        "topic": "Probability",
        "question": "In a pack of cards, what is the probability of drawing a heart?",
        "answers": [
          { "text": "1/4", "correct": true },
          { "text": "1/2", "correct": false },
          { "text": "1/3", "correct": false },
          { "text": "1/52", "correct": false }
        ]
      },
      {
        "topic": "Probability",
        "question": "What is the probability of rolling an even number on a six-sided die?",
        "answers": [
          { "text": "1/2", "correct": true },
          { "text": "1/3", "correct": false },
          { "text": "1/6", "correct": false },
          { "text": "1/4", "correct": false }
        ]
      },
      {
        "topic": "Algebra",
        "question": "Which of the following numbers is prime?",
        "answers": [
          { "text": "1", "correct": false },
          { "text": "2", "correct": true },
          { "text": "4", "correct": false },
          { "text": "9", "correct": false }
        ]
      },
      {
        "topic": "Geometry",
        "question": "How many sides does a pentagon have?",
        "answers": [
          { "text": "4", "correct": false },
          { "text": "6", "correct": false },
          {  "text": "5", "correct": true },
          { "text": "3", "correct": false }
        ]
      },
      {
        "topic": "Statistics",
        "question": "What is the range of the following set of numbers: 4, 8, 6, 5, 3?",
        "answers": [
          { "text": "5", "correct": true },
          { "text": "4", "correct": false },
          { "text": "2", "correct": false },
          { "text": "1", "correct": false }
        ]
      }
      
]
;


const questionElement = document.getElementById("question");
const ansbtns = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const topic = document.querySelector(".topic");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next"

   
    
   showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questiNo = currentQuestionIndex + 1;
    console.log(typeof questiNo)
    topic.innerText = questions[currentQuestionIndex].topic
    questionElement.innerHTML = questiNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansbtns.appendChild(button)

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswere)

    })
}

function resetState(){
    nextButton.style.display = "none"
    while(ansbtns.firstChild){
        ansbtns.removeChild(ansbtns.firstChild)
    }
}

function selectAnswere(e){
    const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score ++;

    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansbtns.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
    

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length} !`
    const msg = document.createElement("h3");
    if(score < (questions.length/2)){  
        msg.innerHTML = "Need more practice"
        msg.classList.add("redmsg")
        questionElement.appendChild(msg)
    }
    else{
        msg.innerHTML = " You are doing good carryon"
        msg.classList.add("greenmsg")
        questionElement.appendChild(msg)
    }
    nextButton.innerHTML= "Play Again !"

    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex ++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz()






