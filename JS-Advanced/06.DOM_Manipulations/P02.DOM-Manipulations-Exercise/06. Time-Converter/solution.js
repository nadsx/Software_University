function attachEventsListeners() {
    let buttons = document.querySelectorAll("div input:last-child");

    for (let currentButton of buttons) {
        currentButton.addEventListener("click", convert);
    }

    function convert() {
        let currentInput = this.parentNode.children[1];
        let value = currentInput.value;
        let id = currentInput.id;

        let convertedTime = [];

        if (id === "days") {
            convertedTime["days"] = value;
            convertedTime["hours"] = value * 24;
            convertedTime["minutes"] = value * 1440;
            convertedTime["seconds"] = value * 86400;
        } else if (id === "hours") {
            convertedTime["days"] = value / 24;
            convertedTime["hours"] = value;
            convertedTime["minutes"] = value * 60;
            convertedTime["seconds"] = value * 3600;
        } else if (id === "minutes") {
            convertedTime["days"] = value / 1440;
            convertedTime["hours"] = value / 60;
            convertedTime["minutes"] = value;
            convertedTime["seconds"] = value * 60;
        } else if (id === "seconds") {
            convertedTime["days"] = value / 86400;
            convertedTime["hours"] = value / 3600;
            convertedTime["minutes"] = value / 60;
            convertedTime["seconds"] = value;
        }

        for (let currentButton of buttons) {
            let input = currentButton.parentNode.children[1];
            input.value = convertedTime[input.id];
        }
    }
}