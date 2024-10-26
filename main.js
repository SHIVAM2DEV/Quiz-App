const questions = [
    {
        "question": "हेमोग्लोबिन में कौन सा धातु होता है?",
        "answers": [
            {"text": "लोहा (Fe)", "correct": true},
            {"text": "तांबा (Cu)", "correct": false},
            {"text": "सोडियम (Na)", "correct": false},
            {"text": "कैल्शियम (Ca)", "correct": false}
        ]
     }
     ,
    {
        "question": "किस प्रकार के अणुओं के बीच हाइड्रोजन बंध बनता है?",
        "answers": [
            {"text": "धातुओं के बीच", "correct": false},
            {"text": "ध्रुवीय सहसंयोजक यौगिकों में", "correct": true},
            {"text": "अध्रुवीय सहसंयोजक यौगिकों में", "correct": false},
            {"text": "केवल आयनिक यौगिकों में", "correct": false}
        ]
    }
    ,
    {
        "question": "SO2 के ध्रुवीयता का मुख्य कारण क्या है?",
        "answers": [
            {"text": "अप्रत्याशित संरचना", "correct": false},
            {"text": "कोणीय संरचना", "correct": true},
            {"text": "सीधे संरचना", "correct": false},
            {"text": "त्रिकोणीय संरचना", "correct": false}
        ]
    }
    ,
    {
        "question": "फार्मल्डिहाइड के बायलिंग पॉइंट को बढ़ाने के लिए किस प्रकार के बंधन का योगदान होता है?",
        "answers": [
            {"text": "हाइड्रोजन बंधन", "correct": true},
            {"text": "वैन्डर वाल्स बल", "correct": false},
            {"text": "कोवैलेन्ट बंधन", "correct": false},
            {"text": "धातु बंधन", "correct": false}
        ]
    }
    ,
    {
        "question": "कोलेगेटिव गुण क्या निर्धारित करते हैं?",
        "answers": [
            {"text": "घुलनशीलता", "correct": false},
            {"text": "सॉल्वेंट के प्रकार", "correct": false},
            {"text": "विलेय के अणुओं की संख्या", "correct": true},
            {"text": "घनत्व", "correct": false}
        ]
    }
    ,
    {
        "question": "अणुओं के बीच सहसंयोजक बंध बनता है जब:",
        "answers": [
            {"text": "धातु और अधातु जुड़ते हैं", "correct": false},
            {"text": "दो अधातु जुड़ते हैं", "correct": true},
            {"text": "धातु और अधातु अलग हो जाते हैं", "correct": false},
            {"text": "किसी भी प्रकार का बंधन नहीं होता", "correct": false}
        ]
    }
    ,
    {
        "question": "कौन सा तत्व सबसे अधिक विद्युत ऋणात्मक है?",
        "answers": [
            {"text": "ऑक्सीजन", "correct": false},
            {"text": "फ्लोरीन", "correct": true},
            {"text": "क्लोरीन", "correct": false},
            {"text": "कार्बन", "correct": false}
        ]
    }
    ,
    {
        "question": "कौन सी प्रक्रिया अमोनिया के औद्योगिक उत्पादन में उपयोग होती है?",
        "answers": [
            {"text": "हैबर प्रक्रिया", "correct": true},
            {"text": "बायर प्रक्रिया", "correct": false},
            {"text": "बर्जिलियस प्रक्रिया", "correct": false},
            {"text": "ऑसवाल्ड प्रक्रिया", "correct": false}
        ]
    }
    ,
    {
        "question": "एथेनॉल का संरचनात्मक सूत्र क्या है?",
        "answers": [
            {"text": "CH₃COOH", "correct": false},
            {"text": "C₂H₅OH", "correct": true},
            {"text": "CH₄", "correct": false},
            {"text": "CH₃CHO", "correct": false}
        ]
    }
    ,
    {
        "question": "किसके कारण जल का उच्च बायलिंग पॉइंट होता है?",
        "answers": [
            {"text": "हाइड्रोजन बंधन", "correct": true},
            {"text": "सहसंयोजक बंध", "correct": false},
            {"text": "वैन्डर वाल्स बल", "correct": false},
            {"text": "धातु बंध", "correct": false}
        ]
    }
    ,
    {
        "question": "अल्कोहल और फेनॉल में कौन सा मुख्य अंतर होता है?",
        "answers": [
            {"text": "अल्कोहल में हाइड्रॉक्सिल समूह और फेनॉल में बेंजीन रिंग के साथ OH होता है", "correct": true},
            {"text": "अल्कोहल में कार्बन होता है जबकि फेनॉल में नहीं", "correct": false},
            {"text": "फेनॉल में हाइड्रॉक्सिल समूह नहीं होता", "correct": false},
            {"text": "अल्कोहल का उपयोग रासायनिक प्रतिक्रिया में नहीं होता", "correct": false}
        ]
     }
     ,
    {
        "question": "हाइड्रोजन के कितने समस्थानिक होते हैं?",
        "answers": [
            {"text": "2", "correct": false},
            {"text": "3", "correct": true},
            {"text": "4", "correct": false},
            {"text": "1", "correct": false}
        ]
     }
     ,
     {
        "question": "कौन से गैस का उपयोग औद्योगिक अमोनिया उत्पादन में होता है?",
        "answers": [
            {"text": "हाइड्रोजन", "correct": true},
            {"text": "ऑक्सीजन", "correct": false},
            {"text": "नाइट्रोजन", "correct": false},
            {"text": "कार्बन डाइऑक्साइड", "correct": false}
        ]
     }
     ,
    {
        "question": "कौन सा एक हाइड्रोकार्बन का उदाहरण है?",
        "answers": [
            {"text": "C2H6", "correct": true},
            {"text": "H2O", "correct": false},
            {"text": "NaCl", "correct": false},
            {"text": "CO2", "correct": false}
        ]
     }
     ,
    {
        "question": "कौन सी प्रक्रिया में CO2 का उत्पादन होता है?",
        "answers": [
            {"text": "प्रकाश संश्लेषण", "correct": false},
            {"text": "दहन", "correct": true},
            {"text": "उत्प्रेरण", "correct": false},
            {"text": "ऑक्सीकरण", "correct": false}
        ]
     }
     ,
     {
        "question": "गैसों का कौन सा गुण बोयल का नियम बताता है?",
        "answers": [
            {"text": "दबाव और आयतन का गुणनफल स्थिर होता है", "correct": true},
            {"text": "तापमान और दबाव का गुणनफल स्थिर होता है", "correct": false},
            {"text": "आयतन और तापमान का गुणनफल स्थिर होता है", "correct": false},
            {"text": "दबाव और तापमान का अनुपात स्थिर होता है", "correct": false}
        ]
     }
     ,
     {
        "question": "विकिरण विक्षेपण विधि का उपयोग किसके अध्ययन के लिए होता है?",
        "answers": [
            {"text": "पदार्थ की संरचना", "correct": true},
            {"text": "रासायनिक गुण", "correct": false},
            {"text": "भौतिक गुण", "correct": false},
            {"text": "रंग", "correct": false}
        ]
     }
     ,
     {
        "question": "फेनॉल के क्या उपयोग होते हैं?",
        "answers": [
            {"text": "रसायन उद्योग में", "correct": true},
            {"text": "वास्तुकला में", "correct": false},
            {"text": "कृषि में", "correct": false},
            {"text": "खाद्य में", "correct": false}
        ]
     }
     ,
    {
        "question": "कौन सा एसिड सबसे कमजोर एसिड है?",
        "answers": [
            {"text": "HCl", "correct": false},
            {"text": "CH3COOH", "correct": true},
            {"text": "H2SO4", "correct": false},
            {"text": "HNO3", "correct": false}
        ]
     }
     ,
     {
        "question": "ऑक्सीकरण अवस्था में वृद्धि किसकी पहचान है?",
        "answers": [
            {"text": "ऑक्सीकरण की", "correct": true},
            {"text": "अपचयन की", "correct": false},
            {"text": "उत्प्रेरण की", "correct": false},
            {"text": "विलेय की", "correct": false}
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






