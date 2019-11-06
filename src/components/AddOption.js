import React from "react"

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    addOptionHandler = (e) => {
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOptionHandler}>
                    <input className="add-option__input" type="text " name="option" />
                    <button className="button">Add option</button>
                </form>
            </div>
        )
    }
}