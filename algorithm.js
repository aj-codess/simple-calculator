let displayDiv=document.querySelector(".write");
let get=document.querySelectorAll(".buttons");
let equi=document.querySelector("#calc");

let pool=new Array();

let display=()=>{
 str=pool.join("");
 displayDiv.textContent=str;
};

get.forEach((div)=>{
    div.addEventListener("click",()=>{
        pool.push(div.getAttribute("value"));
        display();
    })
});

equi.addEventListener("click",()=>{
        displayDiv.textContent+="="+eval(str);
});

let clear=document.querySelector("#buttons");
clear.addEventListener("click",()=>{
    pool=new Array();
    display();
});

let rm=document.querySelector("#remove");
rm.addEventListener("click",()=>{
    pool.pop();
    display();
});