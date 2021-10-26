import React, { useEffect } from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/index";
import Store from "./pages/Store";


function Router() {
    function ScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/store" exact component={Store} />
        </BrowserRouter>

    )
}


export default Router;