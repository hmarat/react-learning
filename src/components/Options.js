import React from "react"
import Option from "./Option"

const Options = props => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <div>
                {
                    props.checkedOptions.length > 0 &&
                    <button className="button button--link checked" onClick={() => props.removeCheckedOptionsHandler()}>
                        Remove checked
                    </button>
                }
                <button
                    className="button button--link"
                    onClick={props.removeOptionsHandler}
                >
                    Remove all
            </button>
            </div>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        {props.options.map((option, index) =>
            (
                <Option
                    key={option}
                    optionText={option}
                    removeOptionHandler={props.removeOptionHandler}
                    count={index + 1}
                    isEditing={props.editingOption === option}
                    editOptionHandler={props.editOptionHandler}
                    editOptionSubmitHandler={props.editOptionSubmitHandler}
                    editOptionError={props.editingOption === option ? props.editOptionError : null}
                    onEditOptionBlur={props.onEditOptionBlur}
                    onEditOptionChangeHandler={props.onEditOptionChangeHandler}
                    onCheckHandler={props.onCheckHandler}
                    checked={props.checkedOptions.indexOf(option) !== -1}
                />
            )
        )}
    </div>
)


export default Options