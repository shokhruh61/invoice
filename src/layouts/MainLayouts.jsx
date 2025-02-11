import React from 'react';
import Navbar from '../components/Navbar';

function MainLayouts({ children }) {
    return (
        <div >
            <Navbar />
            {children}

        </div>
    );
}

export default MainLayouts;
