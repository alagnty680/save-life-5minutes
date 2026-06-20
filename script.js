const quizData = [
{
    question: "화상 시 얼음을 직접 대는 것이 좋다.",
    answer: false
},
{
    question: "심정지 환자를 발견하면 119에 신고해야 한다.",
    answer: true
},
{
    question: "CPR은 심장이 멈췄을 때 시행한다.",
    answer: true
},
{
    question: "기도폐쇄 시 등을 세게 때리는 것은 항상 금지된다.",
    answer: false
},
{
    question: "출혈 시 상처를 압박하는 것이 중요하다.",
    answer: true
},
{
    question: "치약은 화상 응급처치에 도움이 된다.",
    answer: false
},
{
    question: "AED는 자동심장충격기이다.",
    answer: true
},
{
    question: "응급처치는 의료인만 할 수 있다.",
    answer: false
},
{
    question: "119 신고 후 응급처치를 시작할 수 있다.",
    answer: true
},
{
    question: "응급처치는 생명을 구하는 데 도움이 된다.",
    answer: true
}
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback");

showQuestion();

function showQuestion(){

    questionElement.textContent =
    `${currentQuestion + 1}. ${quizData[currentQuestion].question}`;

}

function checkAnswer(userAnswer){

    if(userAnswer === quizData[currentQuestion].answer){

        score++;

        feedbackElement.innerHTML =
        "✅ 정답입니다!";
    }

    else{

        feedbackElement.innerHTML =
        "❌ 오답입니다!";
    }

    setTimeout(() => {

        currentQuestion++;

        if(currentQuestion < quizData.length){

            showQuestion();

            feedbackElement.innerHTML = "";
        }

        else{

            document.getElementById("quiz-container").innerHTML = `
                <h2>퀴즈 종료</h2>

                <h3>${score} / ${quizData.length} 점</h3>

                <p>
                ${
                    score >= 8
                    ? "훌륭합니다! 응급처치 능력이 우수합니다."
                    : "조금 더 학습하면 더 좋은 결과를 얻을 수 있습니다."
                }
                </p>

                <button onclick="location.reload()">
                다시하기
                </button>
            `;
        }

    }, 1000);
}