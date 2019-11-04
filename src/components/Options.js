import React from "react"
import Option from "./Option"

const Options = props => (
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


export default Options