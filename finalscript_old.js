
let nilai = 0;
let salah = 0;
let userName = 'Tak punya nama';
const questions = [
    {
        question: "Q1/12: Kapan kita pertama kali ketemu?",
        image: "img/0.png",
        answers: {
            A: {
                text: "30 Juli 2025",
            },
            F: {
                text: "31 Juli 2025",
            },
            B: {
                text: "01 Agustus 2025",
            },
            T: {
                text: "02 Agustus 2025",
            },
            D: {
                text: "03 Agustus 2025",
            },
        },
    },
    {
        question: "Q2/12: Kita ketemu pertama kali dimana?",
        image: "img/01.png",
        answers: {
            F: {
                text: "Mount Hauk",
            },
            F: {
                text: "Mountera",
            },
            F: {
                text: "Night Bound",
            },
            T: {
                text: "Bathroom Hangout",
            },
            F: {
                text: "Mount ASWD",
            },
            F: {
                text: "Blackjack Family",
            },
        },
    },
    {
        question: "Q3/12: Dimana foto ini?",
        image: "img/1.png",
        answers: {
            T: {
                text: "Mount Borneo",
            },
            F: {
                text: "Mount Jawir",
            },
            F: {
                text: "Mount Seminung",
            },
            F: {
                text: "Mount Swiss",
            },
            F: {
                text: "Mount Bromo",
            },
        },
    },
    {
        question: "Q3/12: Ini foto kapan?",
        image: "img/1.png",
        answers: {
            F: {
                text: "01 Agustus 2025",
            },
            T: {
                text: "02 Agustus 2025",
            },
            F: {
                text: "03 Agustus 2025",
            },
            F: {
                text: "04 Agustus 2025",
            },
            F: {
                text: "05 Agustus 2025",
            },
        },
    },
    {
        question: "Q3/12: Ini foto kapan?",
        image: "img/2.png",
        answers: {
            F: {
                text: "14 Agustus 2025",
            },
            F: {
                text: "15 Agustus 2025",
            },
            F: {
                text: "16 Agustus 2025",
            },
            F: {
                text: "17 Agustus 2025",
            },
            T: {
                text: "18 Agustus 2025",
            },
        },
    },
    {
        question: "Q3/12: Dimana foto ini?",
        image: "img/3.png",
        answers: {
            F: {
                text: "Mount Borneo",
            },
            F: {
                text: "Mount Jawir",
            },
            T: {
                text: "Mount Seminung",
            },
            F: {
                text: "Mount Swiss",
            },
            F: {
                text: "Mount Bromo",
            },
        },
    },
    {
        question: "Q3/12: Ini foto kapan?",
        image: "img/3.png",
        answers: {
            F: {
                text: "20 Agustus 2025",
            },
            F: {
                text: "03 Agustus 2025",
            },
            T: {
                text: "24 Agustus 2025",
            },
            F: {
                text: "15 Agustus 2025",
            },
            F: {
                text: "12 Agustus 2025",
            },
        },
    },
    {
        question: "Q3/12: Dimana foto ini?",
        image: "img/4.png",
        answers: {
            F: {
                text: "RP Baru Smith",
            },
            F: {
                text: "Smith Baru",
            },
            T: {
                text: "New Smith RP",
            },
            F: {
                text: "Brookhaven",
            },
            F: {
                text: "Metro Life City RP",
            },
        },
    },
    {
        question: "Q3/12: Ini foto kapan?",
        image: "img/4.png",
        answers: {
            F: {
                text: "28 Juni 2025",
            },
            F: {
                text: "27 Juli 2025",
            },
            T: {
                text: "28 August 2025",
            },
            F: {
                text: "27 August 2025",
            },
            F: {
                text: "27 September 2025",
            },
        },
    },
    {
        question: "Q3/12: Dimana foto ini?",
        image: "img/5.png",
        answers: {
            F: {
                text: "Mount Ngebut",
            },
            F: {
                text: "Mount Seminung",
            },
            T: {
                text: "Mount Sibuatan",
            },
            F: {
                text: "Mount Jawir",
            },
            F: {
                text: "Mount Borneo",
            },
        },
    },
    {
        question: "Q3/12: Ini foto kapan?",
        image: "img/5.png",
        answers: {
            F: {
                text: "28 Juni 2025",
            },
            F: {
                text: "27 Juli 2025",
            },
            T: {
                text: "30 Agustus 2025",
            },
            F: {
                text: "27 August 2025",
            },
            F: {
                text: "27 September 2025",
            },
        },
    },
    {
        question: "Q3/12: Dimana foto ini?",
        image: "img/6.png",
        answers: {
            T: {
                text: "Bathroom",
            },
            F: {
                text: "Rooftop",
            },
            F: {
                text: "Devils",
            },
            F: {
                text: "Salon",
            },
            F: {
                text: "Hangout",
            },
        },
    },
    {
        question: "Q3/12: Ini foto kapan?",
        image: "img/6.png",
        answers: {
            F: {
                text: "10 Oktober 2025",
            },
            T: {
                text: "05 Oktober 2025",
            },
            F: {
                text: "10 Agustus 2025",
            },
            F: {
                text: "05 September 2025",
            },
            F: {
                text: "27 November 2025",
            },
        },
    },
    {
        question: "Q3/12: Siapa creator map difoto ini?",
        image: "img/7.png",
        answers: {
            F: {
                text: "Katalog",
            },
            F: {
                text: "Pembuat Avatar Katalog",
            },
            F: {
                text: "Zepeto Outfits Katalog",
            },
            F: {
                text: "Editor",
            },
            T: {
                text: "ItsMuneeeb",
            },
        },
    },
    {
        question: "Q3/12: Dimana foto ini?",
        image: "img/8.png",
        answers: {
            T: {
                text: "Tugu Jogja",
            },
            F: {
                text: "Jogja",
            },
            F: {
                text: "Borobudur",
            },
            F: {
                text: "Jalan Malioboro",
            },
            F: {
                text: "Kamar Mandi",
            },
        },
    },
    {
        question: "Q3/12: Ini foto kapan?",
        image: "img/8.png",
        answers: {
            F: {
                text: "21 Oktober 2025",
            },
            F: {
                text: "21 Agustus 2025",
            },
            F: {
                text: "19 September 2025",
            },
            F: {
                text: "19 November 2025",
            },
            T: {
                text: "22 November 2025",
            },
        },
    },
    {
        question: "Q3/12: Berapa top speed kendaraan yang dipakai?",
        image: "img/9.png",
        answers: {
            T: {
                text: "Mengemudi ATV Berbahaya",
            },
            F: {
                text: "Mengemudi Becak Berbahaya",
            },
            F: {
                text: "Mengemudi Sepeda Berbahaya",
            },
            F: {
                text: "45",
            },
            T: {
                text: "45 + Nitro",
            },
        },
    },
    {
        question: "Q3/12: Ini foto kapan?",
        image: "img/9.png",
        answers: {
            F: {
                text: "21 Oktober 2025",
            },
            F: {
                text: "21 Agustus 2025",
            },
            F: {
                text: "19 September 2025",
            },
            F: {
                text: "25 November 2025",
            },
            T: {
                text: "22 November 2025",
            },
        },
    },
    {
        question: "Q3/12: Siapa nama yang ada pada foto ini?",
        image: "img/10.png",
        answers: {
            F: {
                text: "alphine_v & notellate12",
            },
            F: {
                text: "vue & ella",
            },
            T: {
                text: "Alphine & Biel",
            },
            F: {
                text: "L***i & Q**i",
            },
            F: {
                text: "Zain & Biel",
            },
        },
    },
    {
        question: "Q3/12: Dimana ini?",
        image: "img/11.jpg",
        answers: {
            F: {
                text: "Are you okay",
            },
            F: {
                text: "Relapse",
            },
            T: {
                text: "Are you lonely?",
            },
            F: {
                text: "Lonely Hills",
            },
            F: {
                text: "Night Bound",
            },
        },
    },
    {
        question: "Q3/12: Total Harga Outfit?",
        image: "img/12.png",
        answers: {
            T: {
                text: "500 Robux",
            },
            T: {
                text: "550 Robux",
            },
            T: {
                text: "750 Robux",
            },
            T: {
                text: "700 Robux",
            },
            T: {
                text: "650 Robux",
            },
        },
    },
    {
        question: "Q3/12: Kapan ini?",
        image: "img/12.png",
        answers: {
            T: {
                text: "02 Agustus 2025",
            },
            T: {
                text: "12 November 2025",
            },
            T: {
                text: "02 Desember 2025",
            },
            T: {
                text: "12 Juli 2025",
            },
            T: {
                text: "02 September 2025",
            },
        },
    },
    {
        question: "Q3/12: Apa nama pancingan yang dipakai alphine & biel?",
        image: "img/13.png",
        answers: {
            F: {
                text: "Lucky Rod",
            },
            T: {
                text: "Midnight Rod",
            },
            F: {
                text: "Astral Rod",
            },
            F: {
                text: "Starter Rod",
            },
            F: {
                text: "Ares Rod",
            },
        },
    },
    {
        question: "Q3/12: Berapa Jumlah CP di mount ini?",
        image: "img/14.png",
        answers: {
            F: {
                text: "200",
            },
            F: {
                text: "300",
            },
            T: {
                text: "400",
            },
            F: {
                text: "500",
            },
            F: {
                text: "600",
            },
        },
    },
    {
        question: "Q3/12: Dimanakah ini?",
        image: "img/14.png",
        answers: {
            T: {
                text: "Mount Island",
            },
            F: {
                text: "Mount Greenveil",
            },
            F: {
                text: "Mount Santeria",
            },
            F: {
                text: "Mount Hemiria",
            },
            F: {
                text: "Mount ASWD",
            },
        },
    },
];


let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {

    }
}


document.getElementById('start-button').addEventListener('click', function () {
    userName = document.getElementById('user-name').value;
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion();
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];
    if (selectedOption.value == 'T') {
        nilai += 1
    } else {
        salah += 1
    }
    console.log(nilai);
    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter

    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...
function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    document.getElementById('quiz').style.display = 'none';

    const totalScore = nilai;
    const calc = nilai / 12 * 100;
    const floaters = parseInt(calc)

    //   <div class="card" style="background-color: #FFFFFF; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    const resultHTML = `
      <h2>Persentase ${userName} Mengenal Aku Sebanyak: ${floaters}%</h2>
        <canvas id="chart" width="800" height="800"></canvas>
            <button onClick='window.location.reload()' class="start-button">Play Again?</button>
    
    `;
    resultElement.innerHTML = resultHTML;

    const chartCanvas = document.getElementById('chart');
    const chartContext = chartCanvas.getContext('2d');

    const chartData = calculateChartData(totalScore);
    drawChart(chartContext, chartData);
}


function calculateChartData(totalScore) {
    const chartData = {
        labels: ['Benar', 'Salah'],
        datasets: [{
            label: 'Jumlah',
            data: [nilai, salah], // only show T score
            backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)',],
            hoverOffset: 4,
            // borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    };
    return chartData;
}

function drawChart(chartContext, chartData) {
    const chart = new Chart(chartContext, {
        type: 'pie',
        data: chartData,
        options: {
            title: {
                display: true,
                text: 'Personality Score'
            },
            legend: {
                display: false
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


