import React from "react";

import "./style.css";

const MainPage = () => {

    const handleLogout = () => {
        console.log('logout');
    }

    return (
        <div id="main">
            <div className="nav">
                <h1 className="logo">RepoGitory</h1>
                <button onClick={handleLogout}>EXIT</button>
            </div>
        </div>
    );
}

export default MainPage;