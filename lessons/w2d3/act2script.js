

function display(value){
    document.getElementById("answer").value+=value;
}
function sum() {
    let next = document.getElementById("answer").value;
    let equation = eval(next);
    document.getElementById("answer")=equation;
    output.innerHTML(equation);
    
}
function clearScreen(){

    document.getElementById("answer").value=" ";
}