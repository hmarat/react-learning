class IndesicionApp extends React.Component {
    render() {
        const title = "Indesicion App";
        const subtitle = "Put your life in the hands of computer";
        const options = ["Option 1", "Option 2", "Option 3"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllHandler = this.removeAllHandler.bind(this);
    }

    removeAllHandler() {
        console.log(this.props.options)
    }

    render() {
        return (
            <div>
                <button onClick={this.removeAllHandler}>Remove all</button>
                {this.props.options.map((option, index) => <Option key={index} optionText={option} />)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    addOptionHandler(e) {
        e.preventDefault();

        const option = e.target.elements["option"].value;

        if (option.trim()) {
            alert(option)
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addOptionHandler}>
                    <input type="text " name="option" />
                    <button type="submit">Add option</button>
                </form>
            </div>
        )
    }

}

ReactDOM.render(<IndesicionApp />, document.getElementById("app"));