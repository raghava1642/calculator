const display = document.getElementById("display");
let memory = 0;
function appendToDisplay(input) {
  display.value += input;
}
function clearData() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function squaringNumber() {
  try {
    const value = parseFloat(display.value);
    if (value < 0) {
      display.value = "Negative Occur";
    } else {
      display.value = Math.sqrt(value);
    }
  } catch (error) {
    display.value = "error";
  }
}
function calculatepercentage(){
    try{
        const value = parseFloat(display.value);
        display.value = value/100;
    }
    catch(error){
        display.value = 'Error';
    }
}
function memoryStore(){
    try{
        memory = parseFloat(display.value);
        display.value = "";
    }
    catch(error){
        display.value ="Error"
    }
}
function memoryRecall() {
    display.value = memory;
}

function memoryCall() {
    memory = 0;
    display.value = "";
}

