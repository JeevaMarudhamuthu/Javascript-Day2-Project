function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="THe Addition is"+c ;   
}
function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById('button1').innerHTML="The Subtraction is "+c;
}
function mul(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("button1").innerHTML="The Multiplication is "+c;
}
function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("button1").innerHTML="The Division is "+c;
}
function square(){
    let a=parseInt(document.getElementById("n1").value);
    let c=Math.sqrt(a);
    document.getElementById("button1").innerHTML="The Square root is "+c;
}
