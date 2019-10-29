"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOneHandler = _this.addOneHandler.bind(_this);
        _this.minusOneHandler = _this.minusOneHandler.bind(_this);
        _this.resetHandler = _this.resetHandler.bind(_this);

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "addOneHandler",
        value: function addOneHandler() {
            this.setState({ count: this.state.count + 1 });
        }
    }, {
        key: "minusOneHandler",
        value: function minusOneHandler() {
            this.setState({ count: this.state.count - 1 });
        }
    }, {
        key: "resetHandler",
        value: function resetHandler() {
            this.setState({ count: 0 });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.addOneHandler },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.minusOneHandler },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.resetHandler },
                    "reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCountingApp()
// }

// const minusOne = () => {
//     count--;
//     renderCountingApp()
// }

// const reset = () => {
//     count = 0;
//     renderCountingApp()
// }

// const renderCountingApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, rootApp);
// }

// renderCountingApp()
