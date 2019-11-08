import React from "react"
import AddOption from "./AddOption"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"

export default class IndesicionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
        editingOption: null,
        editOptionError: null
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    actionCloseHandler = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    pickActionHandler = () => {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => ({ selectedOption: option }))
    }

    removeOptionsHandler = () => {
        this.setState(() => ({
            options: []
        }))
    }

    removeOptionHandler = (removeOption) => {
        this.setState(() => ({ options: this.state.options.filter(option => removeOption !== option) }))
    }

    addOptionHandler = (option) => {
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

    editOptionHandler = option => { this.setState(() => ({ editingOption: option, editOptionError: null })) }

    editOptionSubmitHandler = (e) => {
        e.preventDefault();

        const optionEditedText = e.target.elements["editingOptionText"].value;
        const optionPrevText = this.state.editingOption;

        if (optionEditedText.length === 0) {
            this.setState(() => ({ editOptionError: "Enter a valid option" }))
        }
        else if (this.state.options.indexOf(optionEditedText) === -1 || this.state.options.indexOf(optionEditedText) === this.state.options.indexOf(optionPrevText)) {
            this.setState(prevState => ({
                options: prevState.options.map(option => option !== optionPrevText ? option : optionEditedText),
                editingOption: null,
                editOptionError: null
            }))
        }
        else {
            this.setState(() => ({ editOptionError: "Option already exists" }))
        }
    }

    render() {
        const title = "Indesicion App";
        const subtitle = "Put your life in the hands of computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        pickActionHandler={this.pickActionHandler}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            removeOptionsHandler={this.removeOptionsHandler}
                            removeOptionHandler={this.removeOptionHandler}
                            editingOption={this.state.editingOption}
                            editOptionHandler={this.editOptionHandler}
                            editOptionSubmitHandler={this.editOptionSubmitHandler}
                            editOptionError={this.state.editOptionError}
                        />
                        <AddOption
                            addOptionHandler={this.addOptionHandler}
                        />
                    </div>

                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        actionCloseHandler={this.actionCloseHandler}
                    />
                </div>
            </div>

        )
    }
}