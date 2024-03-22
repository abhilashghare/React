// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ username });
        console.log({password});
        if (username === 'abhi' && password === 'abhi') {
            history.push('/home')
        } else {
            setPassword('')
            setUsername('')
            setErrorMessage('Invalid username or password');
        }
        // Add authentication logic here
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input className="form-control" type="text" required
                     value={username} 
                     onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input className="form-control" type="password" 
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn">Login</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
}

export default Login;
