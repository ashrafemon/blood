import ReactDOM from "react-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import React, {useMemo} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/Landing/Home";
import LandingLayout from "./layouts/LandingLayout";
import Seekers from "./pages/Landing/Seekers";
import Profile from "./pages/Landing/Profile";
import {Provider, useSelector} from "react-redux";
import store from "./store";
import Donors from "./pages/Landing/Donors";
import Loader from "./components/shared/Loader";

const App = () => {
    const {siteLoading} = useSelector(state => state.site)
    const token = localStorage.getItem('token')

    const theme = useMemo(() => {
        return createTheme({
            typography: {
                fontFamily: ["Open Sans"].join(","),
                h2: {
                    fontSize: 24,
                    fontWeight: 600,
                },
                h3: {
                    fontSize: 20,
                    fontWeight: 600,
                },
                h4: {
                    fontSize: 18,
                    fontWeight: 600,
                },
                h5: {
                    fontSize: 16,
                    fontWeight: 600,
                },
                h6: {
                    fontSize: 14,
                    fontWeight: 600,
                },
                body1: {
                    fontSize: 14,
                },
                body2: {
                    fontSize: 12,
                },
            },
            palette: {
                primary: {
                    main: "#F9311D",
                },
            },
        });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            {siteLoading && <Loader/>}

            <BrowserRouter>
                <Switch>
                    <LandingLayout>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/donors" component={Donors}/>
                        <Route exact path="/seekers" component={Seekers}/>
                        {/*<Route exact path="/profile" component={Profile}/>*/}

                        <Route exact path="/profile">
                            {token ? <Profile /> : <Redirect to="/" /> }
                        </Route>

                    </LandingLayout>
                </Switch>
            </BrowserRouter>


        </ThemeProvider>
    );
};

if (document.getElementById("root")) {
    let root = document.getElementById("root");
    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>,
        root
    );
}
