function add(){
    let a=parseFloat(document.getElementById("num1").value);
    let b=parseFloat(document.getElementById("num2").value);
    document.getElementById("Result").innerHTML="Result:"+(a+b);
}
function subtract(){
    let a=parseFloat(document.getElementById("num1").value);
    let b=parseFloat(document.getElementById("num2").value);
    document.getElementById("Result").innerHTML="Result:"+(a-b);
}
function multiply(){
    let a=parseFloat(document.getElementById("num1").value);
    let b=parseFloat(document.getElementById("num2").value);
    document.getElementById("Result").innerHTML="Result:"+(a*b);
}
function divide(){
    let a=parseFloat(document.getElementById("num1").value);
    let b=parseFloat(document.getElementById("num2").value);
    document.getElementById("Result").innerHTML="Result:"+(a/b);
}