import React from 'react';
import { withRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import './App.css'
import routes from "./routes"

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === "/" ? (
        <>
          {routes}
        </>
      ) : (
        <>
          <Nav />
          {routes}
        </>
      )}
    </div>
  );
}

export default withRouter(App)
