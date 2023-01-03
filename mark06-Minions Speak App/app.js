var btnTranslate = document.querySelector(".btn-translate");
var ipTxt = document.querySelector("#ip-txt");
var outputTxt = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

//Error handling
function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong, please try again after sometime..");
}

function clickHandler() {
    var inputText = ipTxt.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputTxt.innerText = translatedText; //output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);