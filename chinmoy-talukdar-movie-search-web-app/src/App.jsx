import React, {useState} from 'react'
import heroImage from '/hero.png'
import Search from "./components/Search.jsx";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src={heroImage} alt="Hero Banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll find Without the Hassle </h1>
                </header>
                <Search serachTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
            </div>
        </main>
    )
}

export default App
