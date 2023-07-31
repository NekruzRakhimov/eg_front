import React, {useEffect, useState} from "react";
import "./styles/App.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import Sidebar from "./components/UI/Sidebar/Sidebar";

function App() {
    localStorage.setItem("auth", "true")
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true)
        }
        setLoading(false)
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <div className="main">
                    <Sidebar/>
                    <div className="content">
                        <AppRouter/>
                    </div>
                </div>

            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;