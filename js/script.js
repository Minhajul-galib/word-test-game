let mainTextShowId = document.getElementById('word-show');
let resultText = document.getElementById('Text-show');
let typedShow = document.getElementById('type-word');
let scoreId = document.getElementById('score');
let nameTextId = document.getElementById('name-text');
let inputName = document.getElementById('name');
let startBtn = document.getElementById('start');
let submitButton = document.getElementById('sub-btn');
let name = inputName.value
let makeWord;
let words =[
'abandon',
'desert',
'desert',
'abatis'
];
let playerName;

// Add Your NAme Click Modal show!
document.querySelector('#name-adder').addEventListener('click', function(){
    document.querySelector('.main-modal').style.display = 'block';
});



function nameBtn(){

    nameTextId.innerHTML = inputName.value;
    document.querySelector('.main-modal').style.display = 'none';
    
    const name = inputName.value;
    const nameScore = localStorage.getItem(name);
    scoreId.innerText = nameScore;
}

function randomWord(){
    const index = Math.round(Math.random() * 4);
    const takeWord = words[index];
    return takeWord.toUpperCase();
}
let ranWord;

function start(){
    ranWord = randomWord();
    typedShow.style.display = 'none';
    typedShow.innerText = '';
    mainTextShowId.innerText = `${ranWord}`;
    sessionStorage.setItem('got-word', ranWord);
    setTimeout(() => {
        mainTextShowId.innerText = ''.padEnd(ranWord.length * 1, '-');
    }, 3000);
    document.getElementById('start').disabled = true;
    document.querySelector('.sub-button').disabled = false;
}

const character = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Clicking btuuon geting code!
document.querySelector('.btn-div').addEventListener('click', function(e){
    
        
    const clickedBtn =  e.target.innerText;
        if(mainTextShowId.textContent === "Welcome to word test"){
            return e;
        }
        else if(clickedBtn.length >= 10){
            return e;
        }
        else if(mainTextShowId.textContent === ranWord){
            return e;
        }
        else if(character.indexOf(clickedBtn) == -1){
            return e;
        }
        else{
            mainTextShowId.innerText ='';
            typedShow.style.display = 'block'
            const preValue = typedShow.innerText;
            makeWord = preValue + clickedBtn;
            typedShow.innerText = makeWord;
        }
            
            
    });

    // delete typed word!!
    function deleteBtn(){
        removecharecter = makeWord.slice(0, makeWord.length - 1);
        makeWord = removecharecter;
        typedShow.innerText = makeWord;
    }

function submitBtn(){
 
    document.getElementById('result-div').style.display = 'block';
    const testCorrect = typedShow.textContent;
    const sessionWord = sessionStorage.getItem('got-word');
    console.log(sessionWord);
    if(testCorrect === sessionWord){
        resultText.innerText = `Congratulations🥳🥳 You got 5 marks`;
        
        const playerScore = 5;

        let preScore = scoreId.innerText;
        if(preScore === ''){
            preInt = 0;
        }
        else{
            preInt = parseInt(preScore)
        }

        const totalScore = preInt + playerScore; 
        resultText.style.color = '#48C9B0'

       // Add score text!
       scoreId.innerText = totalScore;

       // name set!
       const playerName = nameTextId.textContent; 
        
        localStorage.setItem(playerName, totalScore);

        // setInterval(() => {
        // location.reload();
        // }, 2000);
        }
    else{
        resultText.innerText = `Opps🥵🥵 your word is not correct`;
        resultText.style.color = '#48C9B0'
        }

    document.getElementById('start').disabled = false;
    document.querySelector('.sub-button').disabled = true;
    
}
scoreId.innerText = localStorage.getItem(playerName);


function newWordAdd(){
    // new word add input!
    const newWord = document.querySelector('#word-input').value;
    words.push(newWord);
    console.log(words);
}

