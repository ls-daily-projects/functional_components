import React from "react"

import Button from "./Button"

const divide = (num1, num2) => {
    if (num2 === 0) return 0
    return parseFloat(num1) / parseFloat(num2)
}
const multiply = (num1, num2) => parseFloat(num1) * parseFloat(num2)
const subtract = (num1, num2) => parseFloat(num1) - parseFloat(num2)
const add = (num1, num2) => parseFloat(num1) + parseFloat(num2)

const operations = {
    divide,
    multiply,
    subtract,
    add
}

const BUTTONS = [
    { type: "divide", icon: "\u00f7" },
    { type: "multiply", icon: "\u00d7" },
    { type: "subtract", icon: "\u2212" },
    { type: "add", icon: "\u002b" }
]

const OperatorButtons = ({ handleClick }) => (
    <div className="btns-operations">
        {BUTTONS.map(({ type, icon }) => (
            <Button
                key={type}
                value={type}
                handleClick={() => handleClick(type, operations[type])}
            >
                {icon}
            </Button>
        ))}
    </div>
)

export default OperatorButtons
