const inputBox = document.getElementById("input-box");  
const listcontainer = document.getElementById("list");

function addtask(){
    if(inputBox.value ===''){
        alert("Please enter a task");
    
           
    }else {
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00D7";
        li.appendChild(span);
    }
    inputBox.value= " ";
    saveData ();
}
 //deleting the tasks from the list
 listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked");
        saveData ();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData ();
    }
}, false);

function saveData (){
    localStorage.setItem("data",listcontainer.innerHTML);

}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();

    