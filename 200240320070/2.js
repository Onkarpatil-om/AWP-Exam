
function readValue(){
    let getinput1=document.querySelector("#input1").value;
    let getinput2=document.querySelector("#input2").value;
    let getdbox1=document.querySelector("#displaybox1");
    let getdbox2=document.querySelector("#displaybox2");
    
    getdbox1.children[1].innerHTML=getinput1;
    getdbox2.children[1].innerHTML=getinput2;

    document.querySelector("#input2").value="";
    document.querySelector("#input1").value="";

}