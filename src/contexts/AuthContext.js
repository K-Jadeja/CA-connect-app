import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component that will wrap the app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Default user is null

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
