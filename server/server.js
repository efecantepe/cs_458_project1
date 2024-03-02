const express = require('express')
const app = express()
const port = 4236
const cors = require('cors')
const mysql = require('mysql2')
const session = require('express-session');
const bcrypt = require('bcrypt');


// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost', // Change to db host IP for prod
    user: 'root', 
    password: 'haluk1234',
    database: 'cs458-db',
    port: 3307
});

// Function to query the database
const queryDB = (sql, params, callback) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; // Connection failed

        connection.query(sql, params, (error, results, fields) => {
            connection.release(); // Return the connection to the pool

            if (error) throw error; // Query failed

            callback(results);
        });
    });
};

app.use(express.json())
app.use(cors());


// Set session config
app.use(session({
    secret: 'c60fb36d8dcd8c19089f6654778d88a63f03d213f33d68d7b3977cff28e1750f', // SHA-256 for haluk
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using https
}));

app.post('/login', (req, res) => {

    const email = req.query.email
    const password = req.query.password

    console.log(email)
    console.log(password)

    // Using a prepared statement to prevent SQL injection
    const sql = 'SELECT * FROM USERS WHERE email = ?';
    console.log("called login")
    // Get user passwd for that email and check if the user exists
    queryDB(sql, [email], (results) => {
        if (results.length === 0) {
            res.status(401).send({ message: 'Authentication failed', authResult: 0});
        } else {
            const user = results[0];
            // Direct comparison for plain text passwords (change to bcrypt compare for prod)
            if (password === user.password) {
                // Passwords match, create session
                req.session.user = { email };

                console.log(user)

                res.send({ message: "Logged in successfully", authResult: 1, user: {email : user.email, address: user.address, phone_no: user.phone_no }});
            } else {
                // Passwords do not match, no session create
                res.status(401).send({ message: 'Authentication failed', authResult: 0});
            }
        }
    });
});

app.post('/google', (req, res) => {
    // Log the email received in the request body
    console.log('Received email from loginform:', req.body.email);

    // You can perform additional operations here, such as verifying the email or storing it in a database

    // Respond to the client to acknowledge the received data
    res.json({
        status: 'success',
        message: `Received email: ${req.body.email}`
    });
});

app.post('/facebook', (req, res) => {
    res.send('facebook')
})

app.listen(port, () => {
    console.log(port + " is listening")
})