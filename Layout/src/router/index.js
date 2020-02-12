import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from '../pages/Search';
import Detail from '../pages/Detail';
import Products from '../pages/Products';
import Home from '../pages/Home';

const router = () => {
    const routes = [
        { path: '/products', component: Products }, //<Products site_code={} />
        { path: '/detail', component: Detail }, //<ProductDetail productID={productID} />;
        { path: '/search', component: Search }, // <SiteProductList site_code={site_code} main_flag={false}></SiteProductList>
        { path: '/', component: Home },
    ];
    return (
        <Router>
            <Switch>
                {routes.map(route => {
                    const { path, component } = route;
                    return <Route path={path} component={component} key={path} />;
                })}
            </Switch>
        </Router>
    );
};
export default router;
