const questions = [
    
        {
            "question": "What is the law of conservation of mass?",
            "answers": [
                {"text": "Mass can be created.", "correct": false},
                {"text": "Mass can be destroyed.", "correct": false},
                {"text": "Mass is neither created nor destroyed in a chemical reaction.", "correct": true},
                {"text": "Mass is variable.", "correct": false}
            ]
        },
        {
            "question": "Which of the following is an example of a chemical change?",
            "answers": [
                {"text": "Melting of ice", "correct": false},
                {"text": "Burning of wood", "correct": true},
                {"text": "Dissolving sugar in water", "correct": false},
                {"text": "Boiling water", "correct": false}
            ]
        },
        {
            "question": "What is the chemical formula for water?",
            "answers": [
                {"text": "H2O", "correct": true},
                {"text": "O2", "correct": false},
                {"text": "CO2", "correct": false},
                {"text": "NaCl", "correct": false}
            ]
        },
        {
            "question": "Which gas is produced during respiration?",
            "answers": [
                {"text": "Oxygen", "correct": false},
                {"text": "Nitrogen", "correct": false},
                {"text": "Carbon dioxide", "correct": true},
                {"text": "Hydrogen", "correct": false}
            ]
        },
        {
            "question": "What type of bond is formed when electrons are shared between atoms?",
            "answers": [
                {"text": "Ionic bond", "correct": false},
                {"text": "Covalent bond", "correct": true},
                {"text": "Metallic bond", "correct": false},
                {"text": "Hydrogen bond", "correct": false}
            ]
        },
        {
            "question": "Which of the following is not a characteristic of metals?",
            "answers": [
                {"text": "Malleable", "correct": false},
                {"text": "Ductile", "correct": false},
                {"text": "Luster", "correct": false },
                {"text":  "Poor conductors of electricity", "correct": true}
            ]
        },
        {
            "question": "What is the pH of pure water?",
            "answers": [
                {"text": "0", "correct": false},
                {"text": "7", "correct": true},
                {"text": "14", "correct": false},
                {"text": "10", "correct": false}
            ]
        },
        {
            "question": "Which of the following is an acid?",
            "answers": [
                {"text": "NaOH", "correct": false},
                {"text": "HCl", "correct": true},
                {"text": "NaCl", "correct": false},
                {"text": "CaCO3", "correct": false}
            ]
        },
        {
            "question": "What is the main component of air?",
            "answers": [
                {"text": "Oxygen", "correct": false},
                {"text": "Carbon dioxide", "correct": false},
                {"text": "Nitrogen", "correct": true},
                {"text": "Hydrogen", "correct": false}
            ]
        },
        {
            "question": "Which element has the highest electronegativity?",
            "answers": [
                {"text": "Oxygen", "correct": false},
                {"text": "Fluorine", "correct": true},
                {"text": "Chlorine", "correct": false},
                {"text": "Carbon", "correct": false}
            ]
        },
        {
            "question": "What is the chemical formula for sodium chloride?",
            "answers": [
                {"text": "NaCl", "correct": true},
                {"text": "KCl", "correct": false},
                {"text": "CaCl2", "correct": false},
                {"text": "Na2SO4", "correct": false}
            ]
        },
        {
            "question": "What is the primary product of photosynthesis?",
            "answers": [
                {"text": "Oxygen", "correct": true},
                {"text": "Carbon dioxide", "correct": false},
                {"text": "Glucose", "correct": false},
                {"text": "Water", "correct": false}
            ]
        },
        {
            "question": "Which type of reaction occurs when an acid reacts with a base?",
            "answers": [
                {"text": "Synthesis", "correct": false},
                {"text": "Decomposition", "correct": false},
                {"text": "Combustion", "correct": false},
                {"text":  "Neutralization", "correct": true}
            ]
        },
        {
            "question": "What is the process of separating a mixture based on the different boiling points of its components?",
            "answers": [
                {"text": "Filtration", "correct": false},
                {"text": "Evaporation", "correct": false},
                {"text": "Distillation", "correct": true},
                {"text": "Chromatography", "correct": false}
            ]
        },
        {
            "question": "Which gas is used in the preparation of baking soda?",
            "answers": [
                {"text": "Carbon dioxide", "correct": true},
                {"text": "Oxygen", "correct": false},
                {"text": "Nitrogen", "correct": false},
                {"text": "Hydrogen", "correct": false}
            ]
        },
        {
            "question": "Which of the following is a product of respiration?",
            "answers": [
                {"text": "Glucose", "correct": false},
                {"text": "Water", "correct": false},
                {"text": "Carbon dioxide", "correct": true},
                {"text": "Oxygen", "correct": false}
            ]
        },
        {
            "question": "What is the process by which plants lose water vapor called?",
            "answers": [
                {"text": "Transpiration", "correct": true},
                {"text": "Evaporation", "correct": false},
                {"text": "Condensation", "correct": false},
                {"text": "Photosynthesis", "correct": false}
            ]
        },
        {
            "question": "Which of the following is an example of a saturated hydrocarbon?",
            "answers": [
                {"text": "C2H2", "correct": false},
                {"text": "C2H6", "correct": true},
                {"text": "C3H6", "correct": false},
                {"text": "C4H8", "correct": false}
            ]
        },
        {
            "question": "What is the boiling point of water at sea level?",
            "answers": [
                {"text": "100°C", "correct": true},
                {"text": "0°C", "correct": false},
                {"text": "50°C", "correct": false},
                {"text": "25°C", "correct": false}
            ]
        },
        {
            "question": "Which of the following is not a greenhouse gas?",
            "answers": [
                {"text": "Carbon dioxide", "correct": false},
                {"text": "Methane", "correct": false},
                {"text": "Oxygen", "correct": true},
                {"text": "Nitrous oxide", "correct": false}
            ]
        },
        {
            "question": "What is the main source of energy for life on Earth?",
            "answers": [
                {"text": "Geothermal energy", "correct": false},
                {"text": "Solar energy", "correct": true},
                {"text": "Nuclear energy", "correct": false},
                {"text": "Wind energy", "correct": false}
            ]
        },
        {
            "question": "Which process converts glucose into energy in cells?",
            "answers": [
                {"text": "Photosynthesis", "correct": false},
                {"text": "Respiration", "correct": true},
                {"text": "Fermentation", "correct": false},
                {"text": "Transpiration", "correct": false}
            ]
        },
        {
            "question": "Which of the following is a noble gas?",
            "answers": [
                {"text": "Oxygen", "correct": false},
                {"text": "Helium", "correct": true},
                {"text": "Nitrogen", "correct": false},
                {"text": "Hydrogen", "correct": false}
            ]
        },
        {
            "question": "What is the main function of chlorophyll in plants?",
            "answers": [
                {"text": "To absorb water", "correct": false},
                {"text": "To absorb sunlight", "correct": true},
                {"text": "To release oxygen", "correct": false},
                {"text": "To synthesize glucose", "correct": false}
            ]
        },
        {
            "question": "Which element is essential for the formation of proteins?",
            "answers": [
                {"text": "Carbon", "correct": false},
                {"text": "Nitrogen", "correct": true},
                {"text": "Oxygen", "correct": false},
                {"text": "Hydrogen", "correct": false}
            ]
        }
   
]
;


const questionElement = document.getElementById("question");
const ansbtns = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

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






