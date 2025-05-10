import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            axios.get('http://localhost:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true
            })
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                localStorage.removeItem('auth_token');
                setUser(null);
            });
        }
    }, []);

    const login = (userData, token) => {
        setUser(userData);
        localStorage.setItem('auth_token', token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
