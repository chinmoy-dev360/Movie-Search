import React from "react";
import searchImage from "/search.svg"

const search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src={searchImage} alt="searchImage"/>
                <input
                    type="text"
                    placeholder="search movies"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default search