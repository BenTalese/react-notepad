import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Create, Edit, ConfirmClearAll } from '../pages';

export function Router() {

    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/confirmClearAll" component={ConfirmClearAll} />
            <Route>
                404 - Not found!
            </Route>
        </Switch>
    );

}