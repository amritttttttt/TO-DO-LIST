const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function addtask(){

    if(inputbox.value === ''){
        alert("you must write something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
}

} 

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.clasList.toggle("checked");

    }
    else if(e.target.tageName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);