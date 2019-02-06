// DOM Nodes
var form = {
        calc: document.getElementById("Calc"),
        num1: document.getElementById("num1"),
        num2: document.getElementById("num2"),
        result: document.getElementById("calc-result"),
        op: document.getElementById("operation")
}

// Form submit
form.calc.addEventListener("submit", calc);

// Calc result calculation

function calc(e){
    var sum = 0
    switch (form.op.value){
        case "+":
            sum = Number.parseInt(form.num1.value) + Number.parseInt(form.num2.value)
            break
        case "-":
            sum = Number.parseInt(form.num1.value) - Number.parseInt(form.num2.value)
            break
    }
    
    form.result.value = sum;
    console.log("Summed!");
    e.preventDefault();
}