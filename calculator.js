window.onload = function(event){

  // special
  var buttonClr = document.getElementById("but_clr");
  var buttonEnt = document.getElementById("but_ent");

  // state
  var storedNumber;

  // displays
  var mainDisplay = document.getElementById("result_display_value");
  var operatorDisplay = document.getElementById("operator_display");

  // digit event handler
  var setClickOnDigit = function(id) {
    var digit = document.getElementById(id);
    digit.onclick = function() {
      mainDisplay.innerHTML += digit.innerHTML;      
    };
  };

  // operator event handler
  var setClickOnOperator = function(id) {  
    var operator = document.getElementById(id);
    operator.onclick = function() {
      operatorDisplay.innerHTML = operator.innerHTML;
      storedNumber = processCalc();
      mainDisplay.innerHTML = "";
    };
  };

  // calculate math
  var processCalc = function() {
    var result = parseInt(storedNumber);
    if (storedNumber === undefined) {
      result = mainDisplay.innerHTML;
    } else if (operatorDisplay.innerHTML === "+") {
      result += parseInt(mainDisplay.innerHTML);
    } else if (operatorDisplay.innerHTML === "-") {
      result -= parseInt(mainDisplay.innerHTML);
    } else if (operatorDisplay.innerHTML === "*") {
      result *= parseInt(mainDisplay.innerHTML);
    } else if (operatorDisplay.innerHTML === "/") {
      result /= parseInt(mainDisplay.innerHTML);
    } else {
      result = mainDisplay.innerHTML;
    }
    return result;
  };

  // special event handlers
  buttonClr.onclick = function(event) {
    mainDisplay.innerHTML = ""
    operatorDisplay.innerHTML = "";
    storedNumber = "";
  };

  buttonEnt.onclick = function(event) {
    mainDisplay.innerHTML = processCalc();
    operatorDisplay.innerHTML = "";
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

