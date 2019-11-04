class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOneHandler = this.addOneHandler.bind(this);
        this.minusOneHandler = this.minusOneHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);

        this.state = {
            count: props.count
        }
    }

    addOneHandler() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    minusOneHandler() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }

    resetHandler() {
        this.setState(() => ({
            count: 0
        }))
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

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={5}/>, document.getElementById("app"));