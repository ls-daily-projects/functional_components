import React from "react"

const Display = props => {
    return (
        <div {...props} className="display">
            {props.children}
        </div>
    )
}

export default Display
