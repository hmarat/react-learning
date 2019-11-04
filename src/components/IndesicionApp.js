import React from "react"
import AddOption from "./AddOption"
import Options from "./Options"
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"

export default class IndesicionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    actionCloseHandler={this.actionCloseHandler}
                />
            </div>
        )
    }
}