import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Main page</h1>
          <p>A simple app showing react button click navigation</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Recipes')}>Click button to go to recipes page</Button>
          </form>
        </div>
      </div>
    );
  }
}