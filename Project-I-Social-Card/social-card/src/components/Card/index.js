import React from "react"

import "./index.scss"
import ReactLogo from "../../assets/reactbackground.png"

const Card = () => {
    return (
        <div className="card">
            <img src={ReactLogo} alt="React Logo" />
            <div className="lower-third">
                <h4>Get Started with React</h4>
                <p>
                    React makes it painless to create interactive UIs. Design
                    simple views for each state in your application.
                </p>
                <a href="https://reactjs.org">reactjs.org</a>
            </div>
        </div>
    )
}

export default Card
