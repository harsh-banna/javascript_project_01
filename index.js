const textss12 = document.querySelector(".text");

window.addEventListener('load',() => {
    const form = document.querySelector(".input-group");
    const nameinput = document.querySelector("#nameinput");
    const idinput = document.querySelector("#idinput");
    const emailinput = document.querySelector("#emailinput");
    const numinput = document.querySelector("#numinput");
    const listel = document.querySelector("#regns");
    


    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        //const task = (nameinput.value+"   "+idinput.value+"   "+emailinput.value+"    "+numinput.value);
        const task =([`Name:- ${nameinput.value}  Id:- ${idinput.value}   Email:- ${emailinput.value}    Number:- ${numinput.value}`]);
        
        console.log(task);

         if (nameinput.value == "" || idinput.value == "" ||emailinput.value == "" || numinput.value == "") {
            alert("please fill full form");
            return;
        }
        const task_el=document.createElement("div");
        task_el.classList.add("regn");

        const task_content =document.createElement("div");
        task_content.classList.add("content");

        task_el.appendChild(task_content);

        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly","readonly");

        task_content.appendChild(task_input);

        const task_action = document.createElement("div");
        task_action.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit" ;

        const task_delete= document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "Delete" ;

        task_action.appendChild(task_edit);
        task_action.appendChild(task_delete);

        task_el.appendChild(task_action);

        listel.appendChild(task_el);

        nameinput.value = "";
        idinput.value = "";
        emailinput.value = "";
        numinput.value = "";


        task_edit.addEventListener('click',() => {
            if(task_edit.innerText.toLowerCase() == "edit"){
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit.innerText = "save";
            } else {
                task_input.setAttribute("readonly","readonly");
                task_edit.innerText = "edit";
                
            }
        });
        task_delete.addEventListener('click',()=> {
            listel.removeChild(task_el);
        });
        
        localStorage.setItem("registrationData",JSON.stringify(task));
    });
    
});


textss12.value=localStorage.getItem("registrationData");

// function savedata() {
//     localStorage.setItem("data", task_input_el.innerHTML)
//   }

// function showsavedtask(){
//     task_input_el.innerHTML = localStorage.getItem("data")
// }

 
// const validateInputs= ()=>{
    //     const username = nameinput.value.trim();
    //     const emailinput = email.value.trim();
    //     const idinput = idinput.value.trim();
    //     const numinput = numinput.value.input();
    // }