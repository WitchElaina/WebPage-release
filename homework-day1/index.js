const ele = document.getElementById("title")
function changeColor() {
    if(ele.style.color == "black") {
        ele.style.color = "red";
        console.log("Change to red.");
    }
    else {
        ele.style.color = "black";
        console.log("Change to default(black).");
    }
}

btn = document.getElementById("change_color");
btn.addEventListener('click', changeColor);