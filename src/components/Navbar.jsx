import React from "react"

export default function Navbar() {
    return (
        <nav>
            <a href="https://github.com/ValentinaBS">
                    <img 
                        alt="GitHub logo" 
                        src="/images/github-logo.png"
                    />
            </a>
            <div className="nav--title-container">
                <img 
                    src="/images/earth-icon.png" 
                    className="nav--logo" 
                    alt="Planet earth icon"
                />
                <p className="nav--title">
                    My Travel Journal!
                </p>
            </div>
            <a href="https://www.linkedin.com/in/valentina-bel%C3%A9n-s%C3%A1nchez-495ab1217/">
                    <img 
                        alt="Linkedin logo" 
                        src="/images/linkedin-logo.png"
                    />
            </a>
        </nav>
    )
}