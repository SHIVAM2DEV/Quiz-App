const questions = [
    {
        "question": "भारत के सबसे बड़े राज्य का नाम क्या है?",
        "answers": [
            {"text": "मध्य प्रदेश", "correct": false},
            {"text": "राजस्थान", "correct": true},
            {"text": "उत्तर प्रदेश", "correct": false},
            {"text": "महाराष्ट्र", "correct": false}
        ]
    },
    {
        "question": "संविधान में मूल अधिकारों की संख्या कितनी है?",
        "answers": [
            {"text": "6", "correct": true},
            {"text": "7", "correct": false},
            {"text": "5", "correct": false},
            {"text": "8", "correct": false}
        ]
    },
    {
        "question": "भारत की स्वतंत्रता संग्राम का आरंभ कब हुआ?",
        "answers": [
            {"text": "1857", "correct": true},
            {"text": "1942", "correct": false},
            {"text": "1905", "correct": false},
            {"text": "1930", "correct": false}
        ]
    },
    {
        "question": "भारत के पहले राष्ट्रपति कौन थे?",
        "answers": [
            {"text": "डॉ. राजेंद्र प्रसाद", "correct": true},
            {"text": "सर्वपल्ली राधाकृष्णन", "correct": false},
            {"text": "जवाहरलाल नेहरू", "correct": false},
            {"text": "लाल बहादुर शास्त्री", "correct": false}
        ]
    },
    {
        "question": "भारत में सबसे लंबी नदी कौन सी है?",
        "answers": [
            {"text": "गंगा", "correct": false},
            {"text": "यमुना", "correct": false},
            {"text": "ब्रह्मपुत्र", "correct": false},
            {"text": "गंगा", "correct": true}
        ]
    },
    {
        "question": "भारतीय संसद के दो सदन कौन से हैं?",
        "answers": [
            {"text": "राज्य सभा और लोक सभा", "correct": true},
            {"text": "लोक सभा और विधानसभा", "correct": false},
            {"text": "राज्य सभा और विधान परिषद", "correct": false},
            {"text": "विधान सभा और विधान परिषद", "correct": false}
        ]
    },
    {
        "question": "भारतीय संविधान में कितने अनुच्छेद हैं?",
        "answers": [
            {"text": "395", "correct": true},
            {"text": "450", "correct": false},
            {"text": "350", "correct": false},
            {"text": "400", "correct": false}
        ]
    },
    {
        "question": "महात्मा गांधी ने असहमति का पहला आंदोलन कब चलाया?",
        "answers": [
            {"text": "सत्याग्रह", "correct": true},
            {"text": "नमक सत्याग्रह", "correct": false},
            {"text": "भारत छोड़ो आंदोलन", "correct": false},
            {"text": "चंपारण सत्याग्रह", "correct": false}
        ]
    },
    {
        "question": "स्वतंत्रता के बाद पहला आम चुनाव कब हुआ?",
        "answers": [
            {"text": "1952", "correct": true},
            {"text": "1951", "correct": false},
            {"text": "1949", "correct": false},
            {"text": "1962", "correct": false}
        ]
    },
    {
        "question": "सांस्कृतिक विरासत के संरक्षक का कार्य किसका है?",
        "answers": [
            {"text": "संविधान", "correct": true},
            {"text": "आर्थिक नीति", "correct": false},
            {"text": "विदेश नीति", "correct": false},
            {"text": "शिक्षा नीति", "correct": false}
        ]
    },
    {
        "question": "भारत का राष्ट्रीय गीत क्या है?",
        "answers": [
            {"text": "वन्दे मातरम्", "correct": true},
            {"text": "जन गण मन", "correct": false},
            {"text": "आर्यन", "correct": false},
            {"text": "सारे जहां से अच्छा", "correct": false}
        ]
    },
    {
        "question": "भारत के स्वतंत्रता संग्राम में सबसे बड़ा आंदोलन कौन सा था?",
        "answers": [
            {"text": "नमक सत्याग्रह", "correct": false},
            {"text": "भारत छोड़ो आंदोलन", "correct": true},
            {"text": "चंपारण सत्याग्रह", "correct": false},
            {"text": "खिलाफत आंदोलन", "correct": false}
        ]
    },
    {
        "question": "भारत में कितने राज्य हैं?",
        "answers": [
            {"text": "28", "correct": true},
            {"text": "29", "correct": false},
            {"text": "30", "correct": false},
            {"text": "31", "correct": false}
        ]
    },
    {
        "question": "भारत के पहले प्रधानमंत्री कौन थे?",
        "answers": [
            {"text": "इंदिरा गांधी", "correct": false},
            {"text": "जवाहरलाल नेहरू", "correct": true},
            {"text": "लाल बहादुर शास्त्री", "correct": false},
            {"text": "राजेंद्र प्रसाद", "correct": false}
        ]
    },
    {
        "question": "सामाजिक न्याय का अर्थ क्या है?",
        "answers": [
            {"text": "समान अवसर", "correct": true},
            {"text": "समानता", "correct": false},
            {"text": "अधिकार", "correct": false},
            {"text": "स्वतंत्रता", "correct": false}
        ]
    },
    {
        "question": "संविधान के अनुच्छेद 21 में क्या कहा गया है?",
        "answers": [
            {"text": "जीवन का अधिकार", "correct": true},
            {"text": "शिक्षा का अधिकार", "correct": false},
            {"text": "स्वतंत्रता का अधिकार", "correct": false},
            {"text": "स्वास्थ्य का अधिकार", "correct": false}
        ]
    },
    {
        "question": "भारत के राष्ट्रीय पशु का नाम क्या है?",
        "answers": [
            {"text": "बाघ", "correct": true},
            {"text": "गैंडा", "correct": false},
            {"text": "हाथी", "correct": false},
            {"text": "सांभर", "correct": false}
        ]
    },
    {
        "question": "सार्वजनिक स्वास्थ्य का अर्थ क्या है?",
        "answers": [
            {"text": "स्वास्थ्य सेवाएं", "correct": true},
            {"text": "शिक्षा सेवाएं", "correct": false},
            {"text": "अर्थव्यवस्था", "correct": false},
            {"text": "संविधान", "correct": false}
        ]
    },
    {
        "question": "भारत में जनसंख्या की वृद्धि दर कितनी है?",
        "answers": [
            {"text": "1.2%", "correct": true},
            {"text": "1.5%", "correct": false},
            {"text": "2%", "correct": false},
            {"text": "0.8%", "correct": false}
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
    questionElement.innerHTML = `You have scorred ${score} out of ${questions.length} !`
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






