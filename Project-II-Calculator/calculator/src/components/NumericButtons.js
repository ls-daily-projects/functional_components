import React from "react"

import Button from "./Button"

const BUTTONS = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const NumericButtons = ({ handleClick }) => (
    <div className="btns-numeric">
        {BUTTONS.map(num => (
            <Button key={num} handleClick={() => handleClick(num)}>
                {num}
            </Button>
        ))}
    </div>
)

export default NumericButtons
