import React from 'react';
import {Switch, Route} from "react-router-dom"
import Main from "./routes/main";
import Products from "./routes/products";
import Item from "./routes/item";
import FastReview from "./routes/fastReview";
import Admin from "./routes/admin";

function App() {
    return (
        <Switch>
            <Route exact path="/admin" render={() => <Admin/>}/>
            <Route exact path="/" render={() => <Main/>}/>
            <Route exact path="/products" render={() => <Products/>}/>
            <Route exact path="/products/:id" render={() => <Item/>}/>
            <Route exact path="/products/fastReview/:id" render={() => <FastReview/>}/>
        </Switch>
    );
}

export default App;
