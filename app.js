//* VARIABLES *//
let text =document.querySelector("#text"); //todo
let add = document.querySelector(".add"); //addtask
let list = document.querySelector(".list"); //tasks
let warning = document.querySelector(".warning"); 
let clearBtn = document.querySelector("#clearBtn"); 

//* FUNCTIONS *//
list.addEventListener("click" ,(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("fa-marker")){
            e.target.nextElementSibling.style.textDecoration="line-through";
            e.target.className = "fa-solid fa-check";}
    else if (e.target.classList.contains('fa-check')) {
            e.target.nextElementSibling.style.textDecoration="none";
            e.target.className = 'fa-solid fa-marker';
    }else if (e.target.classList.contains('fa-trash-can')){
        if(e.target.parentElement.previousElementSibling.firstElementChild.classList.contains("fa-marker")){
            alert("Please complete the task.")
        }else{
            if(confirm("Do you want to delete the task?"))
            e.target.closest(".line").remove()
        }
        
    }
}
)

add.addEventListener("click",addition)
    
text.addEventListener("keydown",(e)=>{
        if(e.code==="Enter"){
            addition()
        }
    });

function addition(){
    if(text.value){
    list.innerHTML+=
    `<div class="line">
        <div class="subline">
        <i class="fa-solid fa-marker"></i>
            <span>${text.value}</span>
        </div>
        <div><i class="fa-solid fa-trash-can"></i></div>
        </div>`
        warning.innerText=""
        text.value="";
    }else{
        warning.innerText="Please enter a note"
    }
};



//* CLEAR SECTION *//
clearBtn.addEventListener("click",()=>{
    if(list.innerHTML){
        if(confirm("Do you want to delete all tasks?"))
        list.innerHTML=""
    }
});

