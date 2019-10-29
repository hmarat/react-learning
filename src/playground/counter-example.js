class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOneHandler = this.addOneHandler.bind(this);
        this.minusOneHandler = this.minusOneHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);

        this.state = {
            count: 0
        }
    }

    addOneHandler() {
        this.setState({ count: this.state.count + 1 })
    }

    minusOneHandler() {
        this.setState({ count: this.state.count - 1 })
    }

    resetHandler() {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOneHandler}>+1</button>
                <button onClick={this.minusOneHandler}>-1</button>
                <button onClick={this.resetHandler}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

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