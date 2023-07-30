import React from "react";
import "./styles/App.css";
import {BrowserRouter, Link, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
    return (
        <BrowserRouter>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/posts">
                <Posts/>
            </Route>
        </BrowserRouter>
        // <Posts/>
    );
}

export default App;
