let mainTextShowId = document.getElementById('word-show');
let resultText = document.getElementById('Text-show');
let typedShow = document.getElementById('type-word');
let scoreId = document.getElementById('score');
let nameTextId = document.getElementById('name-text');
let ok;

let words =[
'abandon',
'desert',
'desert',
'abatis',
'abattage',
'abattoir',
'abaxial',
'abb',
'abba',
'abbacy',
'Abbai',
'Abbasid',
'abbatial',
'abbess',
'Abbeville',
'Abbevillian',
'abbey',
'Abbie',
'abbot',
'Abbotsford',
'Abbott',
'Abboud',
'abbr',
'abbreviate',
'abbreviated',
'abbreviation',
'abbreviatory'
];
let playerName;
function nameBtn(){
    let nameInput = document.getElementById('name').value;
    document.getElementById('name-text').innerHTML = nameInput;
    return nameInput;
// let playerName = document.getElementById('name-text').textContent;

}

function randomWord(){
    const index = Math.round(Math.random() * 27);
    const takeWord = words[index];
    return takeWord.toUpperCase();
}
let ranWord = randomWord();
function start(){
    typedShow.style.display = 'none';
    mainTextShowId.innerText = `${ranWord}`;
    sessionStorage.setItem('got-word', ranWord);
    setTimeout(() => {
        mainTextShowId.innerText = ''.padEnd(ranWord.length * 1, '-');
    }, 3000);
    document.getElementById('start').disabled = true;
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
            const makeWord = preValue + clickedBtn;
            typedShow.innerText = makeWord;
        }
            
            
    });
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
        localStorage.setItem(nameBtn(), totalScore);
        ok = nameBtn();
        scoreId.innerText = localStorage.getItem(ok);
        setInterval(() => {
        location.reload();
        }, 2000);
        }
    else{
        resultText.innerText = `Opps🥵🥵 your word is not correct`;
        resultText.style.color = '#48C9B0'
        setInterval(() => {
            location.reload();
            }, 2000);
        }
}
scoreId.innerText = localStorage.getItem(ok);
