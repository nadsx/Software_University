function notify(message) {
    let notification = document.getElementById("notification");
    let p = document.createElement("p");
    p.textContent = message;

    notification.appendChild(p);
    notification.style.display = "block";

    setTimeout(function () {
        notification.style.display = "none";
    }, 2000);
}