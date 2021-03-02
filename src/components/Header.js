import React from 'react';

function Header({ titulo }) {
    return (
        <div className='header'>
            <header>
                <h1>{titulo}</h1>
            </header>
        </div>
    );
}

export default Header;
