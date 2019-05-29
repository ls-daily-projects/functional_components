import React, { useState } from "react"

import "./index.scss"

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
const formatDate = date => `${date.getDate()} ${MONTHS[date.getMonth()]}`

const HeaderContainer = () => {
    const [date] = useState(new Date())

    return (
        <header className="header">
            <div className="avatar" />
            <div className="meta">
                <h4 className="author">Lambda School</h4>
                <span className="handle">LambdaSchool</span>
                <time className="timestamp" dateTime={date}>
                    {formatDate(date)}
                </time>
            </div>
            <p className="description">
                Let's learn React by building simple interfaces with components.
                Don't try to overthink it, just keep it simple and have fun.
                Once you feel comfortable using components you are well on your
                way to mastering React!
            </p>
        </header>
    )
}

export default HeaderContainer
