"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndesicionApp = function (_React$Component) {
    _inherits(IndesicionApp, _React$Component);

    function IndesicionApp(props) {
        _classCallCheck(this, IndesicionApp);

        var _this = _possibleConstructorReturn(this, (IndesicionApp.__proto__ || Object.getPrototypeOf(IndesicionApp)).call(this, props));

        _this.removeOptionsHandler = _this.removeOptionsHandler.bind(_this);
        _this.pickActionHandler = _this.pickActionHandler.bind(_this);
        _this.addOptionHandler = _this.addOptionHandler.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndesicionApp, [{
        key: "pickActionHandler",
        value: function pickActionHandler() {
            var option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
            alert(option);
        }
    }, {
        key: "removeOptionsHandler",
        value: function removeOptionsHandler() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "addOptionHandler",
        value: function addOptionHandler(option) {
            if (!option) {
                return "Enter a valid option";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Option already exists";
            }

            this.setState(function (prevState) {
                return {
                    options: [].concat(_toConsumableArray(prevState.options), [option])
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indesicion App";
            var subtitle = "Put your life in the hands of computer";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    pickActionHandler: this.pickActionHandler,
                    hasOptions: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    removeOptionsHandler: this.removeOptionsHandler
                }),
                React.createElement(AddOption, {
                    addOptionHandler: this.addOptionHandler
                })
            );
        }
    }]);

    return IndesicionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.pickActionHandler,
                disabled: !props.hasOptions
            },
            "What should I do?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.removeOptionsHandler },
            "Remove all"
        ),
        props.options.map(function (option, index) {
            return React.createElement(Option, { key: index, optionText: option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        "Option: ",
        props.optionText
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOptionHandler = _this2.addOptionHandler.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "addOptionHandler",
        value: function addOptionHandler(e) {
            e.preventDefault();

            var option = e.target.elements["option"].value;
            var error = this.props.addOptionHandler(option);
            if (!error) {
                e.target.elements["option"].value = "";
            }
            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.addOptionHandler },
                    React.createElement("input", { type: "text ", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndesicionApp, null), document.getElementById("app"));
