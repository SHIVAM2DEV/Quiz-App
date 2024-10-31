const questions = [
    [
        {
            "topic": "संसाधन और विकास",
            "question": "हमारे पर्यावरण में उपलब्ध चीजों को संसाधनों में बदलने की प्रक्रिया को क्या कहते हैं?",
            "answers": [
                { "text": "संसाधन योजना", "correct": false },
                { "text": "संसाधन विकास", "correct": true },
                { "text": "सतत विकास", "correct": false },
                { "text": "संसाधन निर्माण", "correct": false }
            ]
        },
        {
            "topic": "वन और वन्यजीव संसाधन",
            "question": "निम्नलिखित में से कौन सी प्रजाति विलुप्ति के खतरे में है?",
            "answers": [
                { "text": "संकटग्रस्त प्रजाति", "correct": true },
                { "text": "सामान्य प्रजाति", "correct": false },
                { "text": "असुरक्षित प्रजाति", "correct": false },
                { "text": "दुर्लभ प्रजाति", "correct": false }
            ]
        },
        {
            "topic": "जल संसाधन",
            "question": "निम्नलिखित में से कौन पारंपरिक जल संचयन का एक तरीका है?",
            "answers": [
                { "text": "वर्षा जल संचयन", "correct": true },
                { "text": "जल विलवणीकरण", "correct": false },
                { "text": "ड्रिप सिंचाई", "correct": false },
                { "text": "इनमें से कोई नहीं", "correct": false }
            ]
        },
        {
            "topic": "कृषि",
            "question": "कौन सी फसल खरीफ और रबी दोनों मौसमों में उगाई जाती है?",
            "answers": [
                { "text": "चावल", "correct": false },
                { "text": "मक्का", "correct": true },
                { "text": "गेहूं", "correct": false },
                { "text": "कपास", "correct": false }
            ]
        },
        {
            "topic": "खनिज और ऊर्जा संसाधन",
            "question": "निम्नलिखित में से कौन सा संसाधन गैर-नवीकरणीय है?",
            "answers": [
                { "text": "पवन", "correct": false },
                { "text": "सौर", "correct": false },
                { "text": "पेट्रोलियम", "correct": true },
                { "text": "ज्वारीय", "correct": false }
            ]
        },
        {
            "topic": "विनिर्माण उद्योग",
            "question": "कौन सा उद्योग अक्सर आधुनिक उद्योग की रीढ़ कहा जाता है?",
            "answers": [
                { "text": "कपड़ा उद्योग", "correct": false },
                { "text": "सूचना प्रौद्योगिकी", "correct": false },
                { "text": "लोहा और इस्पात उद्योग", "correct": true },
                { "text": "ऑटोमोबाइल उद्योग", "correct": false }
            ]
        },
        {
            "topic": "राष्ट्रीय अर्थव्यवस्था के जीवन रेखा",
            "question": "निम्नलिखित में से कौन परिवहन का सबसे तेज़ साधन है?",
            "answers": [
                { "text": "जलमार्ग", "correct": false },
                { "text": "वायुमार्ग", "correct": true },
                { "text": "रेलमार्ग", "correct": false },
                { "text": "सड़क मार्ग", "correct": false }
            ]
        },
        {
            "topic": "संसाधन और विकास",
            "question": "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
            "answers": [
                { "text": "लाल मिट्टी", "correct": false },
                { "text": "काली मिट्टी", "correct": true },
                { "text": "लेटराइट मिट्टी", "correct": false },
                { "text": "रेगिस्तानी मिट्टी", "correct": false }
            ]
        },
        {
            "topic": "कृषि",
            "question": "कौन सा खेती का प्रकार मुख्य रूप से मानसून वर्षा पर निर्भर करता है?",
            "answers": [
                { "text": "प्लांटेशन खेती", "correct": false },
                { "text": "जीविका खेती", "correct": true },
                { "text": "व्यावसायिक खेती", "correct": false },
                { "text": "मिश्रित खेती", "correct": false }
            ]
        },
        {
            "topic": "जल संसाधन",
            "question": "टैंक सिंचाई के तहत क्षेत्र का सबसे अधिक प्रतिशत किस राज्य में है?",
            "answers": [
                { "text": "तमिलनाडु", "correct": true },
                { "text": "महाराष्ट्र", "correct": false },
                { "text": "पंजाब", "correct": false },
                { "text": "उत्तर प्रदेश", "correct": false }
            ]
        }
    ]
    
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






