import React from "react"

import "./App.scss"

import useCalculatorReducer, { actionFactory } from "./reducer"

import Button from "./components/Button"
import Display from "./components/Display"
import NumericButtons from "./components/NumericButtons"
import OperatorButtons from "./components/OperatorButtons"

const Calculator = () => {
    const [{ displayValue }, dispatch] = useCalculatorReducer()

    return (
        <div className="calculator">
            <Display>{displayValue}</Display>
            <Button handleClick={() => dispatch(actionFactory("reset"))}>
                clear
            </Button>
            <NumericButtons
                handleClick={num =>
                    dispatch(actionFactory("updateDisplay", num))
                }
            />
            <OperatorButtons
                handleClick={(operator, operation) =>
                    dispatch(
                        actionFactory("executeOperation", {
                            operator,
                            operation
                        })
                    )
                }
            />
            <Button handleClick={() => dispatch(actionFactory("evaluate"))}>
                {"\u003d"}
            </Button>
        </div>
    )
}

export default Calculator
