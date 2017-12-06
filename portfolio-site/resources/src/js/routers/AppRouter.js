import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Home from '../components/Home';

const AppRouter = () => (
    <BrowserRouter>  
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/portfolio/:id" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch> 
        </div>
    </BrowserRouter>
); 

export default AppRouter;