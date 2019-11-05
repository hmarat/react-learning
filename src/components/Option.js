import React from "react"

const Option = props => (
    <div>
        Option: {props.optionText}
        <button
            className="button button--link"
            onClick={() => props.removeOptionHandler(props.optionText)}
        >
            Remove
        </button>
    </div>
)


export default Option