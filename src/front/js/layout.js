import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { useContext } from "react";
import { Context } from "./store/appContext";
import injectContext from "./store/appContext";

// >>> components >>>>
import Navbar from "./component/navbar/Navbar.js";
import Logout from "./pages/Logout.js";
import Explore from "./pages/Explore.js";
import { LandingPage } from "./pages/landingpage";
import { Profile } from "./pages/profile.js";
import UserSettings from "./pages/UserSettings.js";
import { Login } from "./pages/Login.js";
import Inbox from "./pages/Inbox.js";
import { Signup } from "./pages/Signup.js";
import { BandProfile } from "./pages/BandProfile.js";
import { Footer } from "./component/Footer.jsx";
import { Faq } from "./pages/Faq.js";
import ProtectedRoute from "./ProtectedRoute.js";
import { Locales } from "./pages/Locales";
import { Bandas } from "./pages/Bandas.js";
import { Eventos } from "./pages/Eventos.js";
import { Musicos } from "./pages/Musicos.js";
import { MusicianExplorer } from "./pages/exploresubviews/MusicianExplorer.js";
import { BandsExplorer } from "./pages/exploresubviews/BandsExplorer.js";
import { LocalsExplorer } from "./pages/exploresubviews/LocalsExplorer.js";
import { EventsExplorer } from "./pages/exploresubviews/EventsExplorer.js";
import { useRoutes } from "react-router-dom";
import { LocalProfile } from "./pages/LocalProfile.js";
import SocketContext from "./state/socketContext.js";

// <<< components <<<<

//create your first component
const Layout = () => {
  const [loggedUsers, setLoggedUsers] = useState([]);
  const { store, actions } = useContext(Context);
  const Socket = useContext(SocketContext);
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  useEffect(() => {
    if (Socket) {
      Socket.emit("logged_users");
      Socket.on("logged_users", (data) => {
        actions.setLoggedUsers(data);
      });
    }
  }, [Socket]);
  return (
    <div className="">
      <BrowserRouter basename={basename}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route element={<Explore />} path="/explorar" />
            <Route element={<LandingPage />} path="/home" />
            <Route element={<LandingPage />} path="/" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Profile />} path="user/:username" />
            <Route
              element={
                <Login
                  onSuccess={() => {
                    this.setState({ loginStatus: true });
                  }}
                />
              }
              path="/login" 
            />
            {store?.current_user ? (
              <Route element={<Logout />} path="/logout" />
            ) : (
              <Route element={<LandingPage />} path="/home" />
            )}
            <Route element={<Signup />} path="/signup" />
            <Route element={<BandProfile />} exact path="/bandprofile/:id" />
            <Route element={<LocalProfile />} exact path="/localprofile/:id" />
            <Route element={<Faq />} path="/faq" />
            <Route
              path="/user/:username/ajustes"
              element={<ProtectedRoute component={<UserSettings />} />}
            />
            <Route
              path="/user/:username/inbox"
              element={<ProtectedRoute component={<Inbox />} />}
            />
            <Route element={<Locales />} path="/locales" />
            <Route element={<Bandas />} path="/bandas" />
            <Route element={<Eventos />} path="/conciertos" />
            <Route element={<Musicos />} path="/musicos" />

            {/* MOCKING ROUTES FOR SEARCH FEAT SHOWING */}
            <Route
              element={<MusicianExplorer />}
              path="/busqueda/:provincename/:cityname/musicos"
            />
            <Route
              element={<BandsExplorer />}
              path="/busqueda/:provincename/:cityname/bandas"
            />
            <Route
              element={<LocalsExplorer />}
              path="/busqueda/:provincename/:cityname/locales"
            />
            <Route
              element={<EventsExplorer />}
              path="/busqueda/:provincename/:cityname/eventos"
            />
            {/* MOCKING ROUTES FOR SEARCH FEAT SHOWING */}
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
