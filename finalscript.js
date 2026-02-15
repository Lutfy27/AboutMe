// =======================
// STATE
// =======================
let nilai = 0;
let salah = 0;
let userName = "Tak punya nama";
let currentQuestion = 0;
let finalQuestions = [];
let answerHistory = [];

// =======================
// QUESTIONS (STRUCTURE RAPI)
// =======================

const questions = [
    {
        question: "Kapan kita pertama kali ketemu?",
        image: "img/0.png",
        answers: [
            { text: "30 Juli 2025", correct: false },
            { text: "31 Juli 2025", correct: false },
            { text: "01 Agustus 2025", correct: false },
            { text: "02 Agustus 2025", correct: true },
            { text: "03 Agustus 2025", correct: false }
        ]
    },
    {
        question: "Kita ketemu pertama kali dimana?",
        image: "img/01.png",
        answers: [
            { text: "Mount Hauk", correct: false },
            { text: "Mountera", correct: false },
            { text: "Night Bound", correct: false },
            { text: "Bathroom Hangout", correct: true },
            { text: "Mount ASWD", correct: false },
            { text: "Blackjack Family", correct: false }
        ]
    },

    // =====================
    // SOAL LAIN → tinggal tambah format sama
    // =====================

    {
        question: "Dimana foto ini?",
        image: "img/1.png",
        answers: [
            { text: "Mount Borneo", correct: true },
            { text: "Mount Jawir", correct: false },
            { text: "Mount Seminung", correct: false },
            { text: "Mount Swiss", correct: false },
            { text: "Mount Bromo", correct: false }
        ]
    },
    {
        question: "Ini foto kapan?",
        image: "img/1.png",
        answers: [
            { text: "01 Agustus 2025", correct: false },
            { text: "02 Agustus 2025", correct: true },
            { text: "03 Agustus 2025", correct: false },
            { text: "04 Agustus 2025", correct: false },
            { text: "05 Agustus 2025", correct: false }
        ]
    },
    {
        question: "Ini foto kapan?",
        image: "img/2.png",
        answers: [
            { text: "14 Agustus 2025", correct: false },
            { text: "15 Agustus 2025", correct: false },
            { text: "16 Agustus 2025", correct: false },
            { text: "17 Agustus 2025", correct: false },
            { text: "18 Agustus 2025", correct: true }
        ]
    },
    {
        question: "Dimana foto ini?",
        image: "img/3.png",
        answers: [
            { text: "Mount Borneo", correct: false },
            { text: "Mount Jawir", correct: false },
            { text: "Mount Seminung", correct: true },
            { text: "Mount Swiss", correct: false },
            { text: "Mount Bromo", correct: false }
        ]
    },
    {
        question: "Ini foto kapan?",
        image: "img/3.png",
        answers: [
            { text: "20 Agustus 2025", correct: false },
            { text: "03 Agustus 2025", correct: false },
            { text: "24 Agustus 2025", correct: true },
            { text: "15 Agustus 2025", correct: false },
            { text: "12 Agustus 2025", correct: false }
        ]
    },
    {
        question: "Dimana foto ini?",
        image: "img/4.png",
        answers: [
            { text: "RP Baru Smith", correct: false },
            { text: "Smith Baru", correct: false },
            { text: "New Smith RP", correct: true },
            { text: "Brookhaven", correct: false },
            { text: "Metro Life City RP", correct: false }
        ]
    },
    {
        question: "Ini foto kapan?",
        image: "img/4.png",
        answers: [
            { text: "28 Juni 2025", correct: false },
            { text: "27 Juli 2025", correct: false },
            { text: "28 Agustus 2025", correct: true },
            { text: "27 Agustus 2025", correct: false },
            { text: "27 September 2025", correct: false }
        ]
    },
    {
        question: "Dimana foto ini?",
        image: "img/5.png",
        answers: [
            { text: "Mount Ngebut", correct: false },
            { text: "Mount Seminung", correct: false },
            { text: "Mount Sibuatan", correct: true },
            { text: "Mount Jawir", correct: false },
            { text: "Mount Borneo", correct: false }
        ]
    },
    {
        question: "Ini foto kapan?",
        image: "img/5.png",
        answers: [
            { text: "28 Juni 2025", correct: false },
            { text: "27 Juli 2025", correct: false },
            { text: "30 Agustus 2025", correct: true },
            { text: "27 Agustus 2025", correct: false },
            { text: "27 September 2025", correct: false }
        ]
    },
    {
        question: "Dimana foto ini?",
        image: "img/6.png",
        answers: [
            { text: "Bathroom", correct: true },
            { text: "Rooftop", correct: false },
            { text: "Devils", correct: false },
            { text: "Salon", correct: false },
            { text: "Hangout", correct: false }
        ]
    },
    {
        question: "Ini foto kapan?",
        image: "img/6.png",
        answers: [
            { text: "10 Oktober 2025", correct: false },
            { text: "05 Oktober 2025", correct: true },
            { text: "10 Agustus 2025", correct: false },
            { text: "05 September 2025", correct: false },
            { text: "27 November 2025", correct: false }
        ]
    },
    {
        question: "Siapa creator map difoto ini?",
        image: "img/7.png",
        answers: [
            { text: "Katalog", correct: false },
            { text: "Pembuat Avatar Katalog", correct: false },
            { text: "Zepeto Outfits Katalog", correct: false },
            { text: "Editor", correct: false },
            { text: "ItsMuneeeb", correct: true }
        ]
    },
    {
        question: "Dimana foto ini?",
        image: "img/8.png",
        answers: [
            { text: "Tugu Jogja", correct: true },
            { text: "Jogja", correct: false },
            { text: "Borobudur", correct: false },
            { text: "Jalan Malioboro", correct: false },
            { text: "Kamar Mandi", correct: false }
        ]
    },
    {
        question: "Ini foto kapan?",
        image: "img/8.png",
        answers: [
            { text: "21 Oktober 2025", correct: false },
            { text: "21 Agustus 2025", correct: false },
            { text: "19 September 2025", correct: false },
            { text: "19 November 2025", correct: false },
            { text: "22 November 2025", correct: true }
        ]
    },
    {
        question: "Berapa top speed kendaraan yang dipakai?",
        image: "img/9.png",
        answers: [
            { text: "Mengemudi ATV Berbahaya", correct: true },
            { text: "Mengemudi Becak Berbahaya", correct: false },
            { text: "Mengemudi Sepeda Berbahaya", correct: false },
            { text: "45", correct: false },
            { text: "45 + Nitro", correct: true }
        ]
    },
    {
        question: "Ini foto kapan?",
        image: "img/9.png",
        answers: [
            { text: "21 Oktober 2025", correct: false },
            { text: "21 Agustus 2025", correct: false },
            { text: "19 September 2025", correct: false },
            { text: "25 November 2025", correct: true },
            { text: "22 November 2025", correct: false }
        ]
    },
    {
        question: "Siapa nama yang ada pada foto ini?",
        image: "img/10.png",
        answers: [
            { text: "alphine_v & notellate12", correct: false },
            { text: "vue & ella", correct: false },
            { text: "Alphine & Biel", correct: true },
            { text: "L***i & Q**i", correct: false },
            { text: "Zain & Biel", correct: false }
        ]
    },
    {
        question: "Dimana ini?",
        image: "img/11.jpg",
        answers: [
            { text: "Are you okay?", correct: false },
            { text: "Relapse", correct: false },
            { text: "Are you lonely?", correct: true },
            { text: "Lonely Hills", correct: false },
            { text: "Night Bound", correct: false }
        ]
    },
    {
        question: "Total Harga Outfit?",
        image: "img/12.png",
        answers: [
            { text: "500 Robux", correct: true },
            { text: "550 Robux", correct: true },
            { text: "750 Robux", correct: true },
            { text: "700 Robux", correct: true },
            { text: "650 Robux", correct: true }
        ]
    },
    {
        question: "Kapan ini?",
        image: "img/12.png",
        answers: [
            { text: "02 Agustus 2025", correct: true },
            { text: "12 November 2025", correct: true },
            { text: "02 Desember 2025", correct: true },
            { text: "12 Juli 2025", correct: true },
            { text: "02 September 2025", correct: true }
        ]
    },
    {
        question: "Apa nama pancingan yang dipakai alphine & biel?",
        image: "img/13.png",
        answers: [
            { text: "Lucky Rod", correct: false },
            { text: "Midnight Rod", correct: true },
            { text: "Astral Rod", correct: false },
            { text: "Starter Rod", correct: false },
            { text: "Ares Rod", correct: false }
        ]
    },
    {
        question: "Berapa Jumlah CP di mount ini?",
        image: "img/14.png",
        answers: [
            { text: "200", correct: false },
            { text: "300", correct: false },
            { text: "400", correct: true },
            { text: "500", correct: false },
            { text: "600", correct: false }
        ]
    },
    {
        question: "Dimanakah ini?",
        image: "img/15.png",
        answers: [
            { text: "Mount Island", correct: true },
            { text: "Mount Greenveil", correct: false },
            { text: "Mount Santeria", correct: false },
            { text: "Mount Hemiria", correct: false },
            { text: "Mount ASWD", correct: false }
        ]
    }

];


// =======================
// RANDOMIZER (KECUALI 2 TERATAS)
// =======================

function shuffleArray(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function prepareQuestions() {
    const fixed = questions.slice(0, 2);
    const random = shuffleArray(questions.slice(2));
    finalQuestions = [...fixed, ...random];
}


// =======================
// START BUTTON
// =======================

document.getElementById("start-button").addEventListener("click", () => {

    userName = document.getElementById("user-name").value || "Tanpa Nama";
    document.getElementById("start-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";

    prepareQuestions();
    currentQuestion = 0;
    nilai = 0;
    salah = 0;
    answerHistory = [];
    displayQuestion();
});


// =======================
// DISPLAY QUESTION
// =======================

function displayQuestion() {
    const quizElement = document.getElementById("quiz");
    const question = finalQuestions[currentQuestion];

    const progressPercent = ((currentQuestion) / finalQuestions.length) * 100;

    quizElement.classList.remove("fade-in");
    void quizElement.offsetWidth;
    quizElement.classList.add("fade-in");

    let html = `
        <div class="progress-container">
            <div class="progress-bar" style="width:${progressPercent}%"></div>
        </div>

        <p>Q${currentQuestion + 1}/${finalQuestions.length}</p>
        <p>${question.question}</p>
    `;

    if (question.image) {
        html += `<img src="${question.image}">`;
    }

    question.answers.forEach(answer => {
        html += `
            <button class="large-rectangular answer-btn" data-correct="${answer.correct}">
                ${answer.text}
            </button>
        `;
    });

    quizElement.innerHTML = html;

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.addEventListener("click", handleAnswer);
    });
}


// =======================
// HANDLE ANSWER
// =======================

function handleAnswer(e) {
    const isCorrect = e.target.dataset.correct === "true";
    const question = finalQuestions[currentQuestion];

    if (isCorrect) nilai++;
    else salah++;

    answerHistory.push({
        question: question.question,
        image: question.image,
        userAnswer: e.target.innerText,
        correctAnswers: question.answers
            .filter(a => a.correct)
            .map(a => a.text)
    });

    currentQuestion++;

    if (currentQuestion < finalQuestions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}


// =======================
// RESULT
// =======================

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    document.getElementById("quiz").style.display = "none";

    const percent = Math.round((nilai / finalQuestions.length) * 100);

    let reviewHTML = `<div class="review-list">`;

    answerHistory.forEach((item, index) => {
        const isCorrect = item.correctAnswers.includes(item.userAnswer);

        reviewHTML += `
            <div class="review-item ${isCorrect ? "correct" : "wrong"}">
                <p><strong>Soal ${index + 1}</strong> ${isCorrect ? `✅` : `❌`}</p>
                <p>${item.question}</p>
                ${item.image ? `<img src="${item.image}" class="review-img">` : ""}
                <p>Jawaban kamu: <b>${item.userAnswer}</b></p>
                <!-- <p>Jawaban benar: <b>${item.correctAnswers.join(", ")}</b></p> -->
            </div>
        `;
    });

    reviewHTML += `</div>`;

    resultElement.innerHTML = `
        <h2>${userName} mengenal ellaphine sebesar ${percent}% 💖</h2>
        <canvas id="chart" width="300" height="300"></canvas>
        ${reviewHTML}
        <button onclick="location.reload()" class="start-button">Main Lagi</button>
    `;

    new Chart(document.getElementById("chart"), {
        type: "pie",
        data: {
            labels: ["Benar", "Salah"],
            datasets: [{
                data: [nilai, salah]
            }]
        },
        options: {
            plugins: {
                legend: { display: false }
            }
        }
    });
}

