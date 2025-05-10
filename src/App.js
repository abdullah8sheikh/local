import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Context/auth-context";
import AuthContext from "./Context/auth-context";
import LoginForm from "./Component/LoginForm";
import RegisterForm from "./Component/RegisterForm";
import GoogleLoginButton from "./Component/GoogleLoginButton";
import GoogleCallback from "./Component/GoogleCallback"; // You'll create this
import Dashboard from "./Component/Dashboard"; // You'll create this

const AppContent = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={!user ? <LoginPage /> : <Navigate to="/dashboard" />} />
            <Route path="/google/callback" element={<GoogleCallback />} />
            <Route path="/dashboard" element={user ? <Dashboard logout={logout} /> : <Navigate to="/" />} />
        </Routes>
    );
};

const LoginPage = () => (
    <>
        <h1>Abdullah main Page</h1>
        <LoginForm />
        <h1>Register Page</h1>
        <RegisterForm />
        <GoogleLoginButton />
    </>
);

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <AppContent />
            </Router>
        </AuthProvider>
    );
};

export default App;
