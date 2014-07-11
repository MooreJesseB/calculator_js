window.onload = function(event){
  var storedNumber = "0";

  // calculate math
  var processCalc = function() {
    var numOne = parseInt(storedNumber);
    var numTwo = parseInt(mainDisplay.innerHTML);
    var operator = operatorDisplay.innerHTML;
    clearMainDisplay();
    clearOpDisplay();
    switch (operator){
      case "+":
        updateMainDisplay(numOne + numTwo);
        break;
      case "-":
        updateMainDisplay(numOne - numTwo);
        break;
      case "*":
        updateMainDisplay(numOne * numTwo);
        break;
      case "/":
        updateMainDisplay(numOne / numTwo);
        break;
      default: 
        alert("Error!!! This is not a valid operator! " + operator);
        break;
    }
  };

  // displays
  var mainDisplay = document.getElementById("result_display_value");
  var operatorDisplay = document.getElementById("operator_display");

  var clearMainDisplay = function() {
    mainDisplay.innerHTML = "";
  };

  var clearOpDisplay = function() {
    operatorDisplay.innerHTML = "";
  };

  var updateMainDisplay = function(string) {
    console.log(storedNumber);
    mainDisplay.innerHTML += string;  
  };

  // event handlers
  var setClickOnDigit = function(id) {
    var digit = document.getElementById(id);
    digit.onclick = function() {
      updateMainDisplay(digit.innerHTML);      
    };
  };

  var setClickOnOperator = function(id) {    
    var operator = document.getElementById(id);
    operator.onclick = function() {
      clearOpDisplay();      
      operatorDisplay.innerHTML = operator.innerHTML; 
      storedNumber = mainDisplay.innerHTML;    
      clearMainDisplay();
    };
  };

  // special event handlers
  var buttonClr = document.getElementById("but_clr");
  var buttonEnt = document.getElementById("but_ent");

  buttonClr.onclick = function(event) {
    clearMainDisplay();
    clearOpDisplay();
    storedNumber = "";
  };

  buttonEnt.onclick = function(event) {
    processCalc();
  };

  // digits
  setClickOnDigit("but_one");
  setClickOnDigit("but_two");
  setClickOnDigit("but_three");
  setClickOnDigit("but_four");
  setClickOnDigit("but_five");
  setClickOnDigit("but_six");
  setClickOnDigit("but_seven");
  setClickOnDigit("but_eight");
  setClickOnDigit("but_nine");
  setClickOnDigit("but_zero");

  // operators
  setClickOnOperator("but_plus");
  setClickOnOperator("but_sub");
  setClickOnOperator("but_mult");
  setClickOnOperator("but_div");  
};