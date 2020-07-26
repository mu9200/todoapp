var add_list = document.getElementById("add_list");

function addToDo(){
    var todo_data = document.getElementById("todo_data");
    
    //Create list
    var li = document.createElement("li")
    var spanc = document.createElement("span")
    var litext = document.createTextNode(todo_data.value)
    //li.appendChild(litext) sir
    li.appendChild(spanc)
    spanc.appendChild(litext)
    add_list.appendChild(li)
    spanc.setAttribute("class", "listadd")

    //create del button

    var delBtn = document.createElement("button")
    var detText = document.createTextNode("Delete")
    delBtn.appendChild(detText)
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    li.appendChild(delBtn)
    


    //create edit button

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    spanc.appendChild(editBtn)
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "editItem(this)")
    
    

    todo_data.value = ""
    

    console.log(li);
}

function deleteItem(e){
    e.parentNode.remove()
s
}

function delAll(){
    add_list.innerHTML = ""
}


function editItem(e){
    var value = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",value)
    e.parentNode.firstChild.nodeValue = editValue
}