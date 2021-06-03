import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" activeStyle={{background: 'black', color: 'white'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={{background: 'black', color: 'white'}}>소개</NavLink>
                </li>
            </ul>
            <hr/>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/profiles/:username" component={Profile}/>
                <Route
                    render={({location}) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
