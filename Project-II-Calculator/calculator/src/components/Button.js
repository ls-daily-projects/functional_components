import React from "react"

import classnames from "classnames"

const Button = ({ isActive = false, handleClick, children }) => {
    const classes = classnames("btn", { "is-active": isActive })

    return (
        <button className={classes} onClick={() => handleClick()}>
            {children}
        </button>
    )
}

export default Button
