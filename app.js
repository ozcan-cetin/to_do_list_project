//* VARIABLES *//
let text =document.querySelector("#text");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
let warning = document.querySelector(".warning");
let clearBtn = document.querySelector("#clearBtn");

let totalCount=0;
let checkedCount=0;

//* FUNCTIONS *//
list.addEventListener("click" ,(e)=>{
    if(e.target.classList.contains("checkbox")){
        if(e.target.checked){
            e.target.nextElementSibling.style.textDecoration="line-through";
            checkedCount++
        }else{
            e.target.nextElementSibling.style.textDecoration="none";
            checkedCount--
        }
    }
    else if(e.target.classList.contains("remove")){
        (e.target.closest(".line").style.display="none")
    }
})