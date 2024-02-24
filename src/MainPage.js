import React from 'react';
import './MainPage.css'; // Import the CSS file for styling
import { useLocation } from 'react-router-dom';

function MainPage() {
    const location = useLocation();
    const stateParams = location.state;

    // Access the state parameters directly
    const { email, phone, address } = stateParams;

    return (
        <div className="container">
            <h1>Welcome...</h1>
            <h1>Email: {email}</h1>
            <h1>Address: {address}</h1>
            <h1>Phone: {phone}</h1>
        </div>
    );
}

export default MainPage;
