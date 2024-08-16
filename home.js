var input = document.getElementById("text");


function add() {
    document.getElementById("list").innerHTML += '${text.value} <button>delete</button>';
    text.value = "";
}
function deleteAdded() {
    document.getElementById("list").innerHTML = '<p class="ml-[36%]">add your work</p>';
    
}
