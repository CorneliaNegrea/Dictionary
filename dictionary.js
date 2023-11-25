let wordsArray = [];

function saveWord(){
    let newWord = document.getElementById('textInput').value;
    wordsArray.push(newWord);  
    console.log(wordsArray);
}

function searchWord() {
    let newWord = document.getElementById('textInput').value;
    let found = wordsArray.includes(newWord);
    if (found) {
        document.getElementById('message').innerText = "The word was found!";
    } else {
        document.getElementById('message').innerText = "The word was not found!";
    }
}

  