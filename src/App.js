import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar"

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/about'} component={About}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
