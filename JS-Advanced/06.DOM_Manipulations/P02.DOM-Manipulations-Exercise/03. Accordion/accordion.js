function toggle() {
    let extraDiv = document.getElementById("extra");
    let button = document.getElementsByClassName("button")[0];

    if (button.innerHTML === "More") {
        extraDiv.style.display = "block";
        button.innerHTML = "Less";
    } else {
        extraDiv.style.display = "none";
        button.innerHTML = "More";
    }
}