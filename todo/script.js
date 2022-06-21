
function getType() {
    return document.getElementById("todo").value
}



function addList() {
    const text = getType();

    if(!text.length) return;
    console.log(text);

    const display = createList(text) ;
    document.body.append(display);
    display.classList.add("show");

   
}


document.querySelector("button").addEventListener("click", addList);

function createList(props) {

    const {text} = props;

    const list = document.createElement("div");
    list.classList.add("list");

    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.append("x");

    closeButton.onclick = close(list);


    list.append(closeButton, props);

    return list;
  
}


function close(display){
    return ()=> {
      display.classList.remove("show");
      
    };
}




