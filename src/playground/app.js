class IndesicionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeOptionsHandler = this.removeOptionsHandler.bind(this);
        this.removeOptionHandler = this.removeOptionHandler.bind(this);
        this.pickActionHandler = this.pickActionHandler.bind(this);
        this.addOptionHandler = this.addOptionHandler.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}))
            }
        } catch(e){
        }   
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    pickActionHandler() {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(option);
    }

    removeOptionsHandler() {
        this.setState(() => ({
            options: []
        }))
    }

    removeOptionHandler(removeOption){
        this.setState(() => ({options: this.state.options.filter(option => removeOption !== option)}))
    }

    addOptionHandler(option) {
        if (!option) {
            return "Enter a valid option"
        }
        else if (this.state.options.indexOf(option) > -1) {
            return "Option already exists"
        }

        this.setState(prevState => ({
            options: [...prevState.options, option]
        }))
    }

    render() {
        const title = "Indesicion App";
        const subtitle = "Put your life in the hands of computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    pickActionHandler={this.pickActionHandler}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    removeOptionsHandler={this.removeOptionsHandler}
                    removeOptionHandler={this.removeOptionHandler}
                />
                <AddOption
                    addOptionHandler={this.addOptionHandler}
                />
            </div>
        )
    }
}

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = props => {
    return (
        <div>
            <button
                onClick={props.pickActionHandler}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = props => {
    return (
        <div>
            <button onClick={props.removeOptionsHandler}>Remove all</button>
            {props.options.map((option, index) => 
                (
                    <Option 
                        key={index} 
                        optionText={option} 
                        removeOptionHandler={props.removeOptionHandler}
                    />
                )
            )}
        </div>
    )
}

const Option = props => {
    return (
        <div>
            Option: {props.optionText}
            <button onClick={() => props.removeOptionHandler(props.optionText)}>Remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOptionHandler = this.addOptionHandler.bind(this);
        this.state = {
            error: undefined
        }
    }

    addOptionHandler(e) {
        e.preventDefault();

        const option = e.target.elements["option"].value;
        const error = this.props.addOptionHandler(option);
        if (!error) {
            e.target.elements["option"].value = "";
        }
        this.setState(() => ({
            error
        }))
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOptionHandler}>
                    <input type="text " name="option" />
                    <button>Add option</button>
                </form>
            </div>
        )
    }

}

ReactDOM.render(<IndesicionApp />, document.getElementById("app"));