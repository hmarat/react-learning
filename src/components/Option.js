import React from "react"

const Option = props => {
    return (
        <div>
            Option: {props.optionText}
            <button onClick={() => props.removeOptionHandler(props.optionText)}>Remove</button>
        </div>
    )
}

export default Option