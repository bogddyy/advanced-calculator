document.addEventListener("DOMContentLoaded", function () {
  // Selectăm elementele pentru toate cifrele și operațiile
  let digit0 = document.querySelector("#digit0");
  let digit1 = document.querySelector("#digit1");
  let digit2 = document.querySelector("#digit2");
  let digit3 = document.querySelector("#digit3");
  let digit4 = document.querySelector("#digit4");
  let digit5 = document.querySelector("#digit5");
  let digit6 = document.querySelector("#digit6");
  let digit7 = document.querySelector("#digit7");
  let digit8 = document.querySelector("#digit8");
  let digit9 = document.querySelector("#digit9");

  // Operațiile
  let add = document.querySelector("#add");
  let subtract = document.querySelector("#subtract");
  let multiply = document.querySelector("#multiply");
  let divide = document.querySelector("#divide");
  let equals = document.querySelector("#equals");
  let clear = document.querySelector("#clear");
  let result = document.querySelector(".result");

  // Inițializăm variabilele
  let firstNumber = 0;
  let secondNumber = 0;
  let operation = "";
  let startBuildingSecondNumber = false;

  // Funcție care construiește numerele
  function buildNumber(numberReceived) {
    if (startBuildingSecondNumber === false) {
      firstNumber = firstNumber * 10 + numberReceived;
      result.innerHTML = firstNumber;
    } else {
      secondNumber = secondNumber * 10 + numberReceived;
      result.innerHTML = secondNumber;
    }
  }

  // Funcții
  function handleMultiplyClick() {
    startBuildingSecondNumber = true;
    operation = "multiply";
    result.innerHTML = "*";
  }

  function handleAddClick() {
    startBuildingSecondNumber = true;
    operation = "add";
    result.innerHTML = "+";
  }

  function handleSubtractClick() {
    startBuildingSecondNumber = true;
    operation = "subtract";
    result.innerHTML = "-";
  }

  function handleDivideClick() {
    startBuildingSecondNumber = true;
    operation = "divide";
    result.innerHTML = "/";
  }

  function handleEqualsClick() {
    let operationResult;
    if (firstNumber === 0 && secondNumber === 0 && operation === "") {
      result.innerHTML = "Eroare";
      return;
    }
    if (operation === "multiply") {
      operationResult = firstNumber * secondNumber;
    } else if (operation === "add") {
      operationResult = firstNumber + secondNumber;
    } else if (operation === "subtract") {
      operationResult = firstNumber - secondNumber;
    } else if (operation === "divide") {
      operationResult = firstNumber / secondNumber;
    }

    result.innerHTML = operationResult;

    // Resetare variabile
    firstNumber = 0;
    secondNumber = 0;
    startBuildingSecondNumber = false;
    operation = "";
  }

  function handleClearClick() {
    firstNumber = 0;
    secondNumber = 0;
    startBuildingSecondNumber = false;
    operation = "";
    result.innerHTML = "0";
  }

  // Event listeners pentru butoane (cifre)
  digit0.addEventListener("click", function () {
    buildNumber(0);
  });
  digit1.addEventListener("click", function () {
    buildNumber(1);
  });
  digit2.addEventListener("click", function () {
    buildNumber(2);
  });
  digit3.addEventListener("click", function () {
    buildNumber(3);
  });
  digit4.addEventListener("click", function () {
    buildNumber(4);
  });
  digit5.addEventListener("click", function () {
    buildNumber(5);
  });
  digit6.addEventListener("click", function () {
    buildNumber(6);
  });
  digit7.addEventListener("click", function () {
    buildNumber(7);
  });
  digit8.addEventListener("click", function () {
    buildNumber(8);
  });
  digit9.addEventListener("click", function () {
    buildNumber(9);
  });

  // Event listeners pentru operații
  add.addEventListener("click", handleAddClick);
  subtract.addEventListener("click", handleSubtractClick);
  multiply.addEventListener("click", handleMultiplyClick);
  divide.addEventListener("click", handleDivideClick);
  equals.addEventListener("click", handleEqualsClick);

  // Event listener pentru butonul de clear
  clear.addEventListener("click", handleClearClick);
});
