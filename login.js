let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let p1=document.getElementById("para1");
let p2=document.getElementById("para2");
function login(){
    let inputVal1=input1.value;
    let inputVal2=input2.value;
    if(inputVal1===""){
        p1.textContent="Name Required!";
    }
    if(inputVal2===""){
        p2.textContent="Class Required!";
    }
    if(inputVal1!=""){
        p1.textContent="";
    }
    if(inputVal2!=""){
        p2.textContent="";
    }
}