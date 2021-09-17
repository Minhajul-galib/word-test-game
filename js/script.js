let mainTextShowId = document.getElementById('word-show');
let resultText = document.getElementById('Text-show');
let typedShow = document.getElementById('type-word');

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

console.log(words);
function randomWord(){
    const index = Math.round(Math.random() * 27);
    const takeWord = words[index];
    return takeWord.toUpperCase();
}
let ranWord = randomWord();
function start(){
    mainTextShowId.innerText = `${ranWord}`;
    sessionStorage.setItem('got-word', ranWord);
    setTimeout(() => {
        mainTextShowId.innerText = ''.padEnd(ranWord.length * 1, '-');
    }, 3000);
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
    const testCorrect = typedShow.textContent;
    const sessionWord = sessionStorage.getItem('got-word');
    console.log(sessionWord);
    if(testCorrect === sessionWord){
        resultText.innerText = `Congratulations🥳🥳 You got 5marks`;
        resultText.style.color = '#48C9B0'
        }
    else{
        resultText.innerText = `Opps🥵🥵 your word is not correct`;
        resultText.style.color = '#48C9B0'
        }
}

// document.getElementById('submit-btn').addEventListener('click', function(){
    
// });
// use
// const clickedBtn = event.target.innerText;

// document.querySelector('.btn-div').addEventListener('click', function(event){
//     
//     if(clickedBtn === 'Submit'){

//         
//     }
// });

