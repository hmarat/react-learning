"use strict";

var app = {
    title: "Indesicion App",
    subtitle: "Indesicion app, for solving global problems",
    options: []
};

var rootApp = document.getElementById("app");

var onSubmitHandler = function onSubmitHandler(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        e.target.elements.option.value = "";
        app.options.push(option);
        renderTemplate();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderTemplate();
};

var onDisicionMaker = function onDisicionMaker() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    alert(option);
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onDisicionMaker, disabled: app.options.length === 0 },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove all"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onSubmitHandler },
            React.createElement("input", { name: "option", type: "text" }),
            React.createElement(
                "button",
                null,
                "Add Options"
            )
        )
    );

    ReactDOM.render(template, rootApp);
};

renderTemplate();
