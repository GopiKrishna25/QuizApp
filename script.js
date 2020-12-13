const quizData= [
    {
        question: '5+6',
        a: '11',
        b: '16',
        c: '20',
        d: '5',
        correct: 'a'
    }, {
        question: 'What is the National Bird of India?',
        a: 'Peacock',
        b: 'ostrich',
        c: 'Pigeon',
        d: 'parrot',
        correct: 'a'
    }, {
        question: 'Who is the Prime Minister of India?',
        a: 'Narendra Modi',
        b: 'Man Mohan Singh',
        c: 'Prathiba Patel',
        d: 'Ram Nath Govindh',
        correct: 'a'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats',
        correct: 'a'
    }, {
        question: 'Who is the Chief Minister of Telangana?',
        a: 'K. Chandrashekar rao',
        b: 'Mohan Krishna',
        c: 'Gopi Krishna',
        d: 'none of the above',
        correct: 'a'
    }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected()
{
    
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked)
            {
                answer = answerEl.id;
            }
    });
    
    return answer;
}

function deselectAnswers()
{   
    answerEls.forEach((answerEl) => {
        answerEl.Checked = false;
    });
}


 submitBtn.addEventListener("click",() => {
     //check to see the answer
     const answer = getSelected();
     
     
     if(answer)
         {
             if (answer === quizData[currentQuiz].correct) {
                 score++;
             }
             else
                 {
                     $("#corrans").innerHTML = "The Correct Answer is: " + quizData[currentQuiz].correct;
                 }

             currentQuiz++;

             if (currentQuiz < quizData.length) {
                 loadQuiz();
             } else {
                 quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`; 
             }
             }
 });