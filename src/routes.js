import React from 'react';
import FrontPage  from './components/FrontPage';
import About  from './components/About';
import NavBar  from './components/NavBar'; 
import Portfolio from './components/Portfolio';
import {Route, Switch, Redirect} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToggleTheme from "react-toggle-theme";

export const Routes = () => {

    const [currentTheme, setCurrentTheme] = React.useState("light");

    React.useEffect(() => {
      
        // Handle theme logic
        // e.g. update localstorage, set window.THEME = theme, etc.
    }, [currentTheme]);
    
    
    return (
        <div
            className={"app-container"}
            style={{ backgroundColor: currentTheme === "light" ? "#000" : "rgb(126, 23, 40)" }}
        >
            <ToggleTheme selectedTheme={currentTheme} onChange={setCurrentTheme} />

        
            <NavBar />
            
            <Switch>
                <Route exact path="/Home" component={FrontPage} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/About" component={About} />
                <Route exact path="/Portfolio" component={Portfolio} />
                <Route exact path="/Contact" component={Contact} />
            </Switch>
            
            <Footer />
           
        </div>
        
    );
};