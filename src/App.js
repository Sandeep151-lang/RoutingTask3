import React from 'react'
import Sidebars from './components/Sidebars'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import CardsComponent from './components/CardsComponent';
import Button from './components/Button';
import ColorUtilities from './components/ColorUtilities';
import BorderUtilites from './components/BorderUtilites';
import AnimationUtilies from './components/AnimationUtilies';
import OtherUtilities from './components/OtherUtilities';
import Charts from './components/Charts';
import Tables from './components/Tables';
import HomePage from './components/HomePage'



const App = () => {
  return <>

    <div id="wrapper">
      <Router>
        <Sidebars />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Dashboard />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/component/cards" component={CardsComponent} />
              <Route exact path="/component/buttons" component={Button} />
              <Route exact path="/utilities/colors" component={ColorUtilities} />
              <Route exact path="/utilities/border" component={BorderUtilites} />
              <Route exact path="/utilities/animation" component={AnimationUtilies} />
              <Route exact path="/utilities/others" component={OtherUtilities} />
              <Route exact path="/chart" component={Charts} />
              <Route exact path="/table" component={Tables} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>

  </>
}
export default App
