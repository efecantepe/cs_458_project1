import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(false);


    useEffect(() => {
        // Ensure the Google Identity Services library has loaded
        const script = document.createElement('script');
        script.src = "https://accounts.google.com/gsi/client";
        script.onload = () => {
            window.google.accounts.id.initialize({
                client_id: "97086115276-gir9kloacdbcevh8b2888iacbe4eg0f8.apps.googleusercontent.com",
                callback: handleCredentialResponse,
                auto_prompt: false,
            });
            window.google.accounts.id.renderButton(
                document.getElementById("googleSignInDiv"), // Ensure this div exists
                { theme: "outline", size: "large" }  // Customization attributes
            );
        };
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Cleanup to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    //TODO ALPHAN BURAYA BAK (isini halledince todolari kaldir)
    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        // Decode JWT to log the email and openid properties
        const decodedToken = parseJwt(response.credential); // Assuming parseJwt is a function you'll implement
        console.log("Email: " + decodedToken.email);
        //TODO HANGI MAILLE GIRDIYSEN O GELIYOR
        setLogged(true);
        // Send the token to your backend for verification
        // Now, send the email to your backend
        //TODO ISTEGI BURADA GONDERIYORUM
        axios.post('http://localhost:7000/google', { email: decodedToken.email })
            .then((response) => {
                console.log('Server response:', response.data);
                setLogged(true); // Update the login state based on server response
            })
            .catch((error) => {
                console.error('Error sending email to server:', error);
            });
    };


    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }



    const handleLogin = () => {
        console.log(email, phone, address, password);
        axios.post(`http://localhost:7000/login?email=${email}&phone=${phone}&address=${address}&password=${password}`)
            .then(response => {
                console.log('Response:', response.data);

                setAddress(response.data.user.address)
                setEmail(response.data.user.email)
                setPhone(response.data.user.phone_no)

                setLogged(true);
            })
            .catch(error => {
                alert("Email or Password is false")
                console.error('Error:', error);
            });
    };


    const handleFacebook = () => {
        console.log("Facebook login attempted");
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
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div id="email_status" hx-get="/get_email_status"></div>
            <br/>

            {
                /*
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <div id="phone_status" hx-get="/get_phone_status"></div>
            <br/>

            <label htmlFor="address">Address:</label>
            <input id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <div id="address_status" hx-get="/get_address_status"></div>
            <br/>
             */
            }

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <div id="password_status" hx-get="/get_password_status"></div>
            <br/>
           

            <div className="row">
                <button name='login_button' className="button" onClick={handleLogin}>Login</button>
                <div className="avatar">
                    <button onClick={handleFacebook} className="icon_button">
                        <img draggable="false" width="30" src="facebook.png" alt="Avatar"/>
                    </button>
                </div>
                <div name="google_button" id="googleSignInDiv"></div>
            </div>

            <div id="g_id_onload"
                 data-client_id="97086115276-gir9kloacdbcevh8b2888iacbe4eg0f8.apps.googleusercontent.com"
                 data-login_uri="http://localhost"
                 data-auto_prompt="false"
                 data-callback="handleCredentialResponse">
            </div>
        </div>
    ) : (
        <div>
            <Navigate to="/mainPage" replace state={{email: email, phone: phone, address: address}}></Navigate>
        </div>
    );
}

export default LoginForm;
