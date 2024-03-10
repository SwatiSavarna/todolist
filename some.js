
// const row= document.querySelector(".row");
// const input=row.children[0];
// const btn=row.children[1];
// function onuserinput(){
//     const list = document.querySelector("#list-container")


//     const add=document.createElement("li");
//     add.innerHTML=input.value;

//     list.after(add);
//     add.style.before.backgroundImage="url('unchecked.png')"
//     input.value="";

// }
// // onuserinput();

const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addtask() {
    if (inputbox.value === "") {
        alert("You mudt Write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
       
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

});
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();