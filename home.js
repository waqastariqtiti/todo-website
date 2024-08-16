let ID = 1;
function add() {
  var input = document.getElementById("text");
  var list = document.getElementById("list");

  if (input.value.trim() === "") {
    alert("Please enter some text.");
    return;
  }

  list.innerHTML += `<div id="addItem-${ID}" class="flex justify-between mx-5 my-5">${ID}: ${input.value} 
      <button onclick="deleteAdded(${ID})" class="text-black bg-red-500 p-2 rounded-md">Delete</button>
    </div>`;
  text.value = "";
  ID++;
}
function deleteAdded(itemID) {
  const item = document.getElementById(`addItem-${itemID}`);
  const restoreButton = document.getElementById(`restore`);
  if (item) {
    item.style.display = "none";
    restoreButton.style.display = "inline";
  }
}
function restore(itemID) {
  const item = document.getElementById(`addItem-${itemID}`);
  const restoreButton = document.getElementById(`restore`);
  if (item) {
    item.style.display = "inline";
    restoreButton.style.display = "none";
  }
}
