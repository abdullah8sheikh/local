import React, { useContext } from "react";
import AuthContext from "../Context/auth-context"; // Import the AuthContext

const Dashboard = ({ logout }) => {
    const { user } = useContext(AuthContext); // Access the user from context

    return (
        <div>
            <h1>Welcome, {user?.name}!</h1> {/* Show user's name */}
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;
