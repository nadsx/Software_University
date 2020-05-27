function lockedProfile() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", showMore);
    }

    function showMore() {
        let profileDiv = this.parentNode;
        let unlockedElement = profileDiv.getElementsByTagName("input")[1];
        let hiddenInfoDiv = profileDiv.children[9];

        if (unlockedElement.checked && this.textContent === "Show more") {
            hiddenInfoDiv.style.display = "block";
            this.textContent = "Hide it";
        } else if (unlockedElement.checked && this.textContent === "Hide it") {
            hiddenInfoDiv.style.display = "none";
            this.textContent = "Show more";
        }
    }
}