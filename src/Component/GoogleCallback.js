import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            localStorage.setItem('auth_token', token);
            navigate('/dashboard');
        }
    }, [navigate]);

    return <div>Logging in...</div>;
};

export default GoogleCallback;
