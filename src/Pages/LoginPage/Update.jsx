import React, { useState, useEffect } from 'react'
import Login from '../LoginPage/Login';
import Dashboard from '../Dashboard/Dashboard';

function Update() {
    const storedToken = localStorage.getItem('token');
    const [token, setToken] = useState(storedToken || null);
    useEffect(() => {
        if (storedToken) {
            setToken(storedToken);
            // const decodedToken = decodeToken(storedToken);
            // setUid(decodedToken.userId);
        }
    }, [storedToken]);
    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };
    return (
        <div>
            {!token ? (
                <Login setToken={setToken} />
            ) : (
                <Dashboard token={token} onLogout={handleLogout} />
            )}
        </div>
    )
}

export default Update