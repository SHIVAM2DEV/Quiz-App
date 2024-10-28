const questions = [
    {
        "question": "What is formed when a strip of magnesium is burned?",
        "answers": [
            {"text": "Magnesium Oxide", "correct": true},
            {"text": "Magnesium Hydroxide", "correct": false},
            {"text": "Magnesium Chloride", "correct": false},
            {"text": "Magnesium Sulfate", "correct": false}
        ]
    },
    {
        "question": "Which reaction is an example of a displacement reaction?",
        "answers": [
            {"text": "Zn + CuSO₄ → ZnSO₄ + Cu", "correct": true},
            {"text": "H₂ + O₂ → H₂O", "correct": false},
            {"text": "NaOH + HCl → NaCl + H₂O", "correct": false},
            {"text": "CaCO₃ → CaO + CO₂", "correct": false}
        ]
    },
    {
        "question": "In which type of reaction is energy absorbed?",
        "answers": [
            {"text": "Endothermic", "correct": true},
            {"text": "Exothermic", "correct": false},
            {"text": "Displacement", "correct": false},
            {"text": "None of these", "correct": false}
        ]
    },
    {
        "question": "Which product can make lime water milky?",
        "answers": [
            {"text": "Carbon Dioxide", "correct": true},
            {"text": "Oxygen", "correct": false},
            {"text": "Hydrogen", "correct": false},
            {"text": "Nitrogen", "correct": false}
        ]
    },
    {
        "question": "Photosynthesis is an example of which type of chemical reaction?",
        "answers": [
            {"text": "Endothermic", "correct": true},
            {"text": "Displacement", "correct": false},
            {"text": "Neutralization", "correct": false},
            {"text": "Decomposition", "correct": false}
        ]
    },
    {
        "question": "Which of the following is an acidic substance?",
        "answers": [
            {"text": "HCl", "correct": true},
            {"text": "NaOH", "correct": false},
            {"text": "KOH", "correct": false},
            {"text": "Ca(OH)₂", "correct": false}
        ]
    },
    {
        "question": "What is the pH of a neutral salt?",
        "answers": [
            {"text": "7", "correct": true},
            {"text": "14", "correct": false},
            {"text": "1", "correct": false},
            {"text": "5", "correct": false}
        ]
    },
    {
        "question": "Which substance is necessary for soap making?",
        "answers": [
            {"text": "Sodium Hydroxide", "correct": true},
            {"text": "Hydrochloric Acid", "correct": false},
            {"text": "Nitric Acid", "correct": false},
            {"text": "Sulfuric Acid", "correct": false}
        ]
    },
    {
        "question": "Which acid is used in the digestive system of living organisms?",
        "answers": [
            {"text": "Hydrochloric Acid", "correct": true},
            {"text": "Sulfuric Acid", "correct": false},
            {"text": "Nitric Acid", "correct": false},
            {"text": "Acetic Acid", "correct": false}
        ]
    },
    {
        "question": "What is the common name for acetic acid?",
        "answers": [
            {"text": "Vinegar", "correct": true},
            {"text": "Lemon juice", "correct": false},
            {"text": "Herbal extract", "correct": false},
            {"text": "Lactic acid", "correct": false}
        ]
    },
    {
        "question": "Which element is a metal?",
        "answers": [
            {"text": "Sodium", "correct": true},
            {"text": "Sulfur", "correct": false},
            {"text": "Carbon", "correct": false},
            {"text": "Oxygen", "correct": false}
        ]
    },
    {
        "question": "Which property of metals makes them suitable for making electrical wires?",
        "answers": [
            {"text": "Ductility", "correct": true},
            {"text": "Thermal conductivity", "correct": false},
            {"text": "Color", "correct": false},
            {"text": "Solubility", "correct": false}
        ]
    },
    {
        "question": "What is the alloy of copper and zinc called?",
        "answers": [
            {"text": "Brass", "correct": true},
            {"text": "Bronze", "correct": false},
            {"text": "Steel", "correct": false},
            {"text": "Duralumin", "correct": false}
        ]
    },
    {
        "question": "Which metal is the most reactive among the following?",
        "answers": [
            {"text": "Potassium", "correct": true},
            {"text": "Iron", "correct": false},
            {"text": "Copper", "correct": false},
            {"text": "Lead", "correct": false}
        ]
    },
    {
        "question": "Which property of non-metals makes them good insulators?",
        "answers": [
            {"text": "Non-conductivity of electricity", "correct": true},
            {"text": "Luster", "correct": false},
            {"text": "Thermal conductivity", "correct": false},
            {"text": "Sound conductivity", "correct": false}
        ]
    },
    {
        "question": "How many valence electrons does carbon have?",
        "answers": [
            {"text": "4", "correct": true},
            {"text": "6", "correct": false},
            {"text": "2", "correct": false},
            {"text": "8", "correct": false}
        ]
    },
    {
        "question": "What is the chemical formula of ethanol?",
        "answers": [
            {"text": "C₂H₅OH", "correct": true},
            {"text": "CH₃OH", "correct": false},
            {"text": "CH₄", "correct": false},
            {"text": "C₂H₄", "correct": false}
        ]
    },
    {
        "question": "Which form of carbon is a good conductor of electricity?",
        "answers": [
            {"text": "Graphite", "correct": true},
            {"text": "Diamond", "correct": false},
            {"text": "Coal", "correct": false},
            {"text": "Charcoal", "correct": false}
        ]
    },
    {
        "question": "Which compound is used to make soap?",
        "answers": [
            {"text": "Sodium Stearate", "correct": true},
            {"text": "Sodium Chloride", "correct": false},
            {"text": "Potassium Sulfate", "correct": false},
            {"text": "Ethanol", "correct": false}
        ]
    },
    {
        "question": "What type of bond does carbon form?",
        "answers": [
            {"text": "Covalent bond", "correct": true},
            {"text": "Ionic bond", "correct": false},
            {"text": "Metallic bond", "correct": false},
            {"text": "Hydrogen bond", "correct": false}
        ]
    },
    {
        "question": "How many groups are there in the modern periodic table?",
        "answers": [
            {"text": "18", "correct": true},
            {"text": "7", "correct": false},
            {"text": "10", "correct": false},
            {"text": "14", "correct": false}
        ]
    },
    {
        "question": "On what basis are elements arranged in the periodic table?",
        "answers": [
            {"text": "Atomic number", "correct": true},
            {"text": "Atomic weight", "correct": false},
            {"text": "Physical state", "correct": false},
            {"text": "Solubility", "correct": false}
        ]
    },
    {
        "question": "Which elements in the periodic table are highly electronegative?",
        "answers": [
            {"text": "Halogens", "correct": true},
            {"text": "Alkali metals", "correct": false},
            {"text": "Metals", "correct": false},
            {"text": "Non-metals", "correct": false}
        ]
    },
    {
        "question": "Which group of elements in the periodic table are called transition metals?",
        "answers": [
            {"text": "Transition elements", "correct": true},
            {"text": "Halogens", "correct": false},
            {"text": "Noble gases", "correct": false},
            {"text": "Alkali metals", "correct": false}
        ]
    },
    {
        "question": "How many elements are there in the first period?",
        "answers": [
            {"text": "2", "correct": true},
            {"text": "8", "correct": false},
            {"text": "18", "correct": false},
            {"text": "32", "correct": false}
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






