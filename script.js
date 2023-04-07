const sentences = [
  { english: 'No one even cared about my problems.', sinhala: '01. කිසිවකු හෝ මගේ ප්‍රශ්න ගැන තැකුවේ නෑ.' },
  { english: 'Someone has just opened the door.', sinhala: '02. කවුරුන් හෝ මේ දැන් දොර ඇරලා.' },
  { english: 'Maheema talked to the teacher as long as she could.', sinhala: '03. මහීමා ඇයට පුලුවන් තරම් කාලයක් ගුරුතුමියට කතා කලා.' },
  { english: 'I guess you have got a lot of questions.', sinhala: '04. මම හිතනවා ඔබට ප්‍රශ්න ගොඩක් තියෙනව කියල.' },
  { english: 'My grandfather died a long time ago.', sinhala: '05. මගේ සීයා මැරුනේ ගොඩ කාලෙකට කලින්.' },
  { english: 'I didn\'t sleep well last night.', sinhala: '06. මම ඊයෙ රෑ හොදට නිදාගත්තෙ නෑ.' },
  { english: 'I need you to answer me right now.', sinhala: '07. මට අවශ්‍යයි මේ දැන්ම ඔබ මට උත්තර දෙන්න.' },
  { english: 'I have already seen this movie.', sinhala: '08. මම දැනටමත් මේ චිත්‍රපටය බලා තියෙනවා.' },
  { english: 'They will buy a car next year.', sinhala: '09. ඔවුන් ඊලග අවුරුද්දේදී මෝටරථයක් මිලට ගනීවි.' },
  { english: 'Mahesh spends a lot of time with his wife.', sinhala: '10. මහේෂ් ඔහුගේ බිරිඳ සමග ගොඩ වේලාවක් ගත කරනවා.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://krishbro.github.io/English-Sent-Maker-10/";
});
