function addItem() {
    var input = document.getElementById("itemInput");
    var itemText = input.value;
    if (itemText === '') {
        alert("내용을 입력하세요.");
        return;
    }
    var itemList = document.getElementById("itemList");
    var li = document.createElement("li");
    li.textContent = itemText;
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.onclick = function () {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    };
    li.appendChild(deleteBtn);
    li.appendChild(checkbox);
    itemList.appendChild(li);
    input.value = '';
}
function removeAllItems() {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = '';
}