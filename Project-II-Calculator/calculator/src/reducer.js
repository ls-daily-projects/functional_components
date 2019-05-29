import { useReducer } from "react"

const parseBufferToFloat = buf => parseFloat(buf, 10)

const calculatorDefaults = {
    displayValue: 0,
    buffer: "0",
    memory: 0,
    selectedOperation: null
}

export const actionFactory = (type, payload = {}) => ({ type, payload })
const calculatorReducer = (state, { type, payload }) => {
    switch (type) {
        case "reset":
            return { ...calculatorDefaults }

        case "updateDisplay":
            const newBuffer = state.buffer + payload
            return {
                ...state,
                buffer: newBuffer,
                displayValue: parseBufferToFloat(newBuffer)
            }

        case "executeOperation":
            if (!state.selectedOperation) {
                const memory = parseBufferToFloat(state.buffer)
                return {
                    ...state,
                    buffer: "0",
                    memory,
                    selectedOperation: payload.operation
                }
            }

            const result = state.selectedOperation(
                state.memory,
                parseBufferToFloat(state.buffer)
            )
            return {
                ...state,
                buffer: "0",
                memory: result,
                displayValue: result,
                selectedOperation: payload.operation
            }

        case "evaluate":
            if (!state.selectedOperation) return state
            const buffer = parseBufferToFloat(state.buffer)
            const result2 = state.selectedOperation(state.memory, buffer)
            return {
                ...state,
                buffer: "0",
                memory: result2,
                displayValue: result2
            }

        default:
            return state
    }
}

export default () => useReducer(calculatorReducer, calculatorDefaults)
