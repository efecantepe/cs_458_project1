import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(false)


    
    

    const handleLogin = () => {

        console.log(email)
        console.log(phone)
        console.log(address)
        console.log(password)

        axios.get(`http://localhost:7000/login?email=${email}&phone=${phone}&address=${address}&password=${password}`)
            .then(response => {
                console.log('Response:', response.data);

                setLogged(true)

            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleGoogle = () => {

        console.log("hadasdjkasld")

        axios.get('http://localhost:7000/google')
            .then(response => {
                console.log('Response:', response.data);

            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleFacebook = () => {

        console.log("hadasdjkasld")

        axios.get('http://localhost:7000/facebook')
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return !logged ? (
        <div className="login">
            <div className="sizedbox"></div>

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div id="email_status" hx-get="/get_email_status"></div>
            <br />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <div id="phone_status" hx-get="/get_phone_status"></div>
            <br />

            <label htmlFor="address">Address:</label>
            <input id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <div id="address_status" hx-get="/get_address_status"></div>
            <br />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div id="password_status" hx-get="/get_password_status"></div>
            <br />

            <div className="row">
                <button className="button" onClick={handleLogin}>Login</button>
                <div className="avatar">
                    <button onClick={handleFacebook} className="icon_button">
                        <img draggable="false" width="30" src="facebook.png" alt="Avatar" />
                    </button>
                </div>
                <div className="avatar">
                    <button onClick={handleGoogle} className="icon_button">
                        <img draggable="false" width="30" src="google.jpg" alt="Avatar" />
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <Navigate to="/mainPage" replace state={{email: email, phone: phone, address: address}}></Navigate>
        </div>
    );
}

export default LoginForm;
