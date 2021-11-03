import React from "react";
import { Route, Redirect, Switch } from "react-router";
import Movies from "./Components/movies";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notFound";
import NavBar from "./Components/navBar";
import LoginForm from "./Components/LoginForm";
import "./App.css";
import RegisterForm from "./Components/registerForm";
import MovieForm from "./Components/movieForm";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm}/>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="not-found"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
