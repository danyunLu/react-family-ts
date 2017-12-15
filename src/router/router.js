import React from "react";
import { Route, Switch } from "react-router-dom";

import Bundle from './Bundle';
import Loading from '../components/Loading/Loading';

import Home from "bundle-loader?lazy&name=home!../pages/Home/Home";
import NotFound from "bundle-loader?lazy&name=notFound!../pages/NotFound/NotFound";


const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component /> : <Loading />
        }
    </Bundle>
);

const getRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)} />
            <Route component={createComponent(NotFound)} />
        </Switch>
    </div>
)

export default getRouter;