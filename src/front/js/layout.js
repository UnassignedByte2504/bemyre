import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import injectContext from "./store/appContext";


import { Home } from "./pages/home";
import { UserProfile } from "./pages/UserProfile";

// >>> components >>>>
import Navbar from "./component/Navbar"
// <<< components <<<<

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Navbar/>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<UserProfile />} path="/user" />
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
