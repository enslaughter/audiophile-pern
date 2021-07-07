import React from "react";
import "./styles/App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";

import { CartContext } from "./CartContext";

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={{}}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>

            {/* Redirect to home if not a valid route: */}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
