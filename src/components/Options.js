import React from "react"
import Option from "./Option"

const Options = props => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <button
                className="button button--link"
                onClick={props.removeOptionsHandler}
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
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


export default Options