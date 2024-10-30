const questions = [
  {
      "topic": "Kavi aur Kavita",
      "question": "किस कवि ने 'सूरदास के पद' की रचना की?",
      "answers": [
          { "text": "सूरदास", "correct": true },
          { "text": "कबीर", "correct": false },
          { "text": "तुलसीदास", "correct": false },
          { "text": "मीरा", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "नीचे दिए गए वाक्यों में से कौन सा 'अव्यय' का उदाहरण है?",
      "answers": [
          { "text": "वह तेजी से दौड़ा", "correct": false },
          { "text": "अचानक वह गिर पड़ा", "correct": true },
          { "text": "वह अपनी किताब पढ़ता है", "correct": false },
          { "text": "राम ने भोजन किया", "correct": false }
      ]
  },
  {
      "topic": "Sahitya aur Katha",
      "question": "'गोदान' उपन्यास के लेखक कौन हैं?",
      "answers": [
          { "text": "मुंशी प्रेमचंद", "correct": true },
          { "text": "रवींद्रनाथ टैगोर", "correct": false },
          { "text": "महादेवी वर्मा", "correct": false },
          { "text": "सुमित्रानंदन पंत", "correct": false }
      ]
  },
  {
      "topic": "Alankar",
      "question": "‘रात दिन का साथी’ मुहावरे का अर्थ क्या है?",
      "answers": [
          { "text": "दिन और रात की यात्रा", "correct": false },
          { "text": "हमेशा साथ रहने वाला", "correct": true },
          { "text": "केवल रात का साथी", "correct": false },
          { "text": "केवल दिन का साथी", "correct": false }
      ]
  },
  {
      "topic": "Sahitya aur Katha",
      "question": "‘मेरे बचपन के दिन’ के लेखक कौन हैं?",
      "answers": [
          { "text": "मंजू श्री", "correct": false },
          { "text": "महादेवी वर्मा", "correct": true },
          { "text": "सुभद्रा कुमारी चौहान", "correct": false },
          { "text": "राहुल सांकृत्यायन", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "‘बहुत’ शब्द का सही प्रयोग क्या है?",
      "answers": [
          { "text": "बहुत लोग यहाँ रहते हैं", "correct": true },
          { "text": "बहुत मैं खाना खाता हूँ", "correct": false },
          { "text": "बहुत सुबह है", "correct": false },
          { "text": "बहुत तुम अच्छे हो", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "‘तथा’ शब्द का उपयोग किसमें होता है?",
      "answers": [
          { "text": "जुड़ने के लिए", "correct": true },
          { "text": "विरोध के लिए", "correct": false },
          { "text": "प्रश्न के लिए", "correct": false },
          { "text": "समय के लिए", "correct": false }
      ]
  },
  {
      "topic": "Sahitya aur Katha",
      "question": "'राम की शक्तिपूजा' किस कवि की रचना है?",
      "answers": [
          { "text": "सूरदास", "correct": false },
          { "text": "महादेवी वर्मा", "correct": false },
          { "text": "सुमित्रानंदन पंत", "correct": false },
          { "text": "सूर्यकांत त्रिपाठी निराला", "correct": true }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "‘अधीर’ शब्द का सही विलोम शब्द क्या है?",
      "answers": [
          { "text": "धैर्य", "correct": false },
          { "text": "अधीरता", "correct": false },
          { "text": "सुधीर", "correct": false },
          { "text": "धीर", "correct": true }
      ]
  },
  {
      "topic": "Kavi aur Kavita",
      "question": "‘तुलसीदास’ किस प्रकार के कवि हैं?",
      "answers": [
          { "text": "विरह रस", "correct": false },
          { "text": "भक्ति रस", "correct": true },
          { "text": "शृंगार रस", "correct": false },
          { "text": "वीर रस", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "‘खड़ा’ शब्द का संधि-विच्छेद क्या है?",
      "answers": [
          { "text": "ख+अड़ा", "correct": true },
          { "text": "ख+रा+ड़ा", "correct": false },
          { "text": "ख+ड़ा", "correct": false },
          { "text": "ख+रा", "correct": false }
      ]
  },
  {
      "topic": "Sahitya aur Katha",
      "question": "‘हरिवंश राय बच्चन’ किस प्रकार के कवि माने जाते हैं?",
      "answers": [
          { "text": "भक्ति कवि", "correct": false },
          { "text": "श्रृंगार कवि", "correct": true },
          { "text": "वीर कवि", "correct": false },
          { "text": "विरह कवि", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "‘भाषा’ शब्द का तद्भव रूप क्या है?",
      "answers": [
          { "text": "बोल", "correct": false },
          { "text": "बानी", "correct": false },
          { "text": "भाखा", "correct": true },
          { "text": "भाषी", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "नीचे दिए गए विकल्पों में से कौन सा 'संधि' है?",
      "answers": [
          { "text": "सु+ख", "correct": false },
          { "text": "धन्य+वाद", "correct": true },
          { "text": "विषय+गुण", "correct": false },
          { "text": "पुस्त+क", "correct": false }
      ]
  },
  {
      "topic": "Kavi aur Kavita",
      "question": "‘कोई दीवाना कहता है’ कविता किसने लिखी है?",
      "answers": [
          { "text": "गोपालदास नीरज", "correct": false },
          { "text": "हरिवंश राय बच्चन", "correct": false },
          { "text": "कुमार विश्वास", "correct": true },
          { "text": "निराला", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "‘तुम्हारा’ का शुद्ध रूप क्या है?",
      "answers": [
          { "text": "तुमरा", "correct": false },
          { "text": "तुमारा", "correct": false },
          { "text": "तुम्हारा", "correct": true },
          { "text": "तुम्हरी", "correct": false }
      ]
  },
  {
      "topic": "Sahitya aur Katha",
      "question": "‘पुष्प की अभिलाषा’ कविता के लेखक कौन हैं?",
      "answers": [
          { "text": "सुभद्रा कुमारी चौहान", "correct": false },
          { "text": "जयशंकर प्रसाद", "correct": true },
          { "text": "हरिवंश राय बच्चन", "correct": false },
          { "text": "धर्मवीर भारती", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "‘आकाश’ शब्द का समास क्या है?",
      "answers": [
          { "text": "अनेक", "correct": false },
          { "text": "द्विगु", "correct": false },
          { "text": "तत्पुरुष", "correct": true },
          { "text": "संयुक्त", "correct": false }
      ]
  },
  {
      "topic": "Vyakaran",
      "question": "‘हरियाली’ का विलोम शब्द क्या है?",
      "answers": [
          { "text": "नीरता", "correct": false },
          { "text": "सूखापन", "correct": true },
          { "text": "पानी", "correct": false },
          { "text": "वनस्पति", "correct": false }
      ]
  },
  {
      "topic": "Kavi aur Kavita",
      "question": "‘नवजात शिशु’ किसके रचनाकार हैं?",
      "answers": [
          { "text": "सूरदास", "correct": false },
          { "text": "महादेवी वर्मा", "correct": true },
          { "text": "कबीर", "correct": false },
          { "text": "मीरा", "correct": false }
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






