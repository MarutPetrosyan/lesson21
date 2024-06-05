import React from "react";
import './Header.css';

function Header({ scrollToAbout, scrollToSection }) {
    return (
        <div className="container">
            <header>
                <img src="https://smartcode.am/public/image/logo.png?v=1" alt="nkar" className="img" />
                <nav>
                    <ul>
                        <li>Դասընթացներ</li>
                        <li onClick={() => scrollToSection()}>Առավելություններ</li>
                        <li onClick={() => scrollToAbout()}>Մեր մասին</li>
                    </ul>
                    <a class='btn'>Սկսե՛լ ուսումը</a>
                </nav>
            </header>
        </div>
    )
}

export default Header