import React from "react"
import AddOption from "./AddOption"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"

export default class IndesicionApp extends React.Component {
    state = {
        options: [],
        checkedOptions: [],
        selectedOption: undefined,
        editingText: "",
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
        if (prevState.options.equals(this.state.options) !== true) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("Added to local storage");
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
            options: [],
            checkedOptions: [],
            selectedOption: undefined,
            editingText: "",
            editingOption: null,
            editOptionError: null
        }))
    }

    removeOptionHandler = (removeOption) => {
        this.setState(() => ({ options: this.state.options.filter(option => removeOption !== option) }))
    }

    addOptionHandler = (option) => {
        if (!option.trim()) {
            return "Enter a valid option"
        }
        else if (this.state.options.indexOf(option.trim()) > -1) {
            return "Option already exists"
        }

        this.setState(prevState => ({
            options: [...prevState.options, option.trim()]
        }))
    }

    editOptionHandler = option => {
        if (!this.state.editOptionError) {
            this.setState(() => ({ editingOption: option, editOptionError: null, editingText: option }))
        }
    }

    onEditOptinoBlur = (e) => {
        e.stopPropagation();

        const editingText = this.state.editingText;

        this.editOptionValidateAndUpdate(editingText)
    }

    onEditOptionChangeHandler = (e) => {
        const editingText = e.target.value.trim();
        const prevEditingText = this.state.editingText;

        if (prevEditingText !== editingText) {
            if (this.state.checkedOptions.indexOf(prevEditingText) !== -1) {
                this.setState(() => ({
                    editingText,
                    checkedOptions: this.state.checkedOptions.map(option => option === prevEditingText ? editingText : option)
                }))
            }
            else {
                this.setState(() => ({ editingText }))
            }
        }
    }

    editOptionValidateAndUpdate = (optionEditedText) => {
        const optionPrevText = this.state.editingOption;

        if (optionEditedText.length === 0) {
            this.setState(() => ({ editOptionError: "Enter a valid option" }))
        }
        else if (this.state.options.indexOf(optionEditedText) === -1 || this.state.options.indexOf(optionEditedText) === this.state.options.indexOf(optionPrevText)) {
            this.setState(prevState => ({
                options: prevState.options.map(option => option !== optionPrevText ? option : optionEditedText),
                editingOption: null,
                editOptionError: null,
                editingText: ""
            }))
        }
        else {
            this.setState(() => ({ editOptionError: "Option already exists" }))
        }
    }

    editOptionSubmitHandler = (e) => {
        e.preventDefault();

        const optionEditedText = e.target.elements["editingOptionText"].value;
        this.editOptionValidateAndUpdate(optionEditedText);
    }

    onCheckHandler = (option, checked) => {
        if (checked) {
            this.setState((prevState) => ({ checkedOptions: [...prevState.checkedOptions, option] }))
        }
        else {
            this.setState((prevState) => ({ checkedOptions: prevState.checkedOptions.filter(item => item !== option) }))
        }
    }

    removeCheckedOptionsHandler = () => {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => prevState.checkedOptions.indexOf(option) === -1),
            checkedOptions: []
        }))
    }

    render() {
        // console.log(`checked options: ${this.state.checkedOptions}`)
        // console.log(`editing text: ${this.state.editingText}`)
        console.log(this.state.options)
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
                            onEditOptionBlur={this.onEditOptinoBlur}
                            onEditOptionChangeHandler={this.onEditOptionChangeHandler}
                            onCheckHandler={this.onCheckHandler}
                            checkedOptions={this.state.checkedOptions}
                            removeCheckedOptionsHandler={this.removeCheckedOptionsHandler}
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