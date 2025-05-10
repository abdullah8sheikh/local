import React from 'react';

const GoogleLoginButton = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8000/api/auth/google/redirect';
    };

    return <button onClick={handleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
