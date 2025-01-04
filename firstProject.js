let inputBox = document.getElementById("task");
let list_of_task = document.getElementById("list");

function add_task(){
    if(inputBox.value === ""){
        window.alert("Notice : You should Enter a task !");
    }
    else{
        //creat a element of the list : 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; 
        //add li to the ul ; 
        list_of_task.appendChild(li);
        // Save the data : 
        //creat span to add (X) smybol that allow the user to delet a task.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        //add span to li : 
        li.appendChild(span);
        saveData();

    }   
    inputBox.value = "";
}
//to check the as complet :  
list_of_task.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentNode.remove();
        saveData();
    }
});

// local storage : 

//save the date : 
function saveData()
{
    window.localStorage.setItem("data", list_of_task.innerHTML);
}
//the data from the local strage and add it the list of tasks 
function get_date()
{
    list_of_task.innerHTML = window.localStorage.getItem("data");
}
get_date();