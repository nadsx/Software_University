function bugTracker() {
    let obj = (() => {
        let container = [];
        let selector = undefined;
        let counter = 0;

        let report = function (author, description, reproducible, severity) {
            container[counter] = {
                ID: counter,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: "Open"
            };

            counter++;

            if (selector) {
                draw();
            }
        };

        let setStatus = function (id, newStatus) {
            container[id].status = newStatus;

            if (selector) {
                draw();
            }
        };

        let remove = function (id) {
            container = container.filter(el => el.ID != id);

            if (selector) {
                draw();
            }
        };

        let sort = function (method) {
            switch (method) {
                case "author":
                    container = container.sort((a, b) => a.author.localeCompare(b.author));
                    break;
                case "severity":
                    container = container.sort((a, b) => a.severity - b.severity);
                    break;
                case "ID":
                    container = container.sort((a, b) => a.ID - b.ID);
            }

            if (selector) {
                draw();
            }
        };

        let output = function (sel) {
            selector = sel;
        };

        let draw = function () {
            $(selector).html(""); // jQuery html() Method - Example => Change the content of all <p> elements

            for (let bug of container) {
                //The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).
                //Basic syntax is: $(selector).action()

                $(selector).append($('<div>').attr('id', "report_" + bug.ID).addClass('report')
                    .append($('<div>').addClass('body')
                        .append($('<p>').text(bug.description)))
                    .append($('<div>').addClass('title')
                        .append($('<span>').addClass('author').text("Submitted by: " + bug.author))
                        .append($('<span>').addClass('status').text(bug.status + " | " + bug.severity))));
            }
        };

        return {
            report,
            setStatus,
            remove,
            sort,
            output
        };
    })();

    return obj;
}