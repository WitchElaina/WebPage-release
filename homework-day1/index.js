const ele = document.getElementById("title")
function changeColor() {
    if(ele.style.color == "") {
        ele.style.color = "red";
        console.log("Change to red.");
    }
    else {
        ele.style.color = "";
        console.log("Change to default.");
    }
}

btn = document.getElementById("change_color");
btn.addEventListener('click', changeColor);
