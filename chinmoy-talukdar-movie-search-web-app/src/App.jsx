import React from 'react'
import heroImage from '/hero.png'

const App = () => {
    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src={heroImage} alt="Hero Banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll find Without the Hassle </h1>
                </header>
                <p>search</p>
            </div>
        </main>
    )
}

export default App
