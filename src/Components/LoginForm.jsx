import React, { Component } from "react";
import Form from "./form";
import Joi from "joi-browser";

class LoginForm extends Form {
  // initializing state for storing the updating input value
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  // validate the value in form

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "username")}
          {this.renderInput("password", "password",'password')}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
