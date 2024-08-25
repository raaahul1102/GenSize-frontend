// import React from 'react';

// const Header = () => (
//     <header style={{ backgroundColor: '#007bff', color: 'white', padding: '20px', textAlign: 'center' }}>
//         <h1>Size Chart Generator</h1>
//     </header>
// );

// export default Header;

// Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1>Your Brand</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#collection">Collection</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
