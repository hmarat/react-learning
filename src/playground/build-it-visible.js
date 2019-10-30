class App extends React.Component {
    constructor(props) {
        super(props);
        this.visibilityToggleHandler = this.visibilityToggleHandler.bind(this)
        this.state = {
            visibility: false
        }
    }

    visibilityToggleHandler() {
        this.setState(prevState => ({
            visibility: !prevState.visibility
        }))
    }

    render() {
        const content = (
            <div>
                <h2>This app solves many problems</h2>
                <p>Its beautiful</p>
            </div>
        )

        return (
            <div>
                <h1>Built it visible App</h1>
                <button onClick={this.visibilityToggleHandler}>{this.state.visibility ? "Hide" : "Show"}</button>
                {this.state.visibility && content}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))