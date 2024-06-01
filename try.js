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

        const task_content_el =document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit" ;

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete" ;

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);

        listel.appendChild(task_el);

        nameinput.value = "";
        idinput.value = "";
        emailinput.value = "";
        numinput.value = "";


        task_edit_el.addEventListener('click',() => {
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "save";
            } else {
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerText = "edit";
                
            }
        });
        task_delete_el.addEventListener('click',()=> {
            listel.removeChild(task_el);
        });
        
        localStorage.setItem("registrationData",JSON.stringify(task));
    });
    
});
