import React, {Component} from "react";
import { connect } from "react-redux";
import {appActions} from './ducks/';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "../dashboard/";
import Sidebar from "./Sidebar";


export class App extends Component {

  state = {
    message: ''
  };

  componentWillReceiveProps(newProps){
    this.setState({message: newProps.message});
  }

  render() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app-container">
                    <Sidebar />
                    <div className="content-wrapper">
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/books" render={() => <div className="container-fluid p-2"> Under Construction </div>} />
                            <Route path="/tshirts" render={() => <div className="container-fluid p-2"> Under Construction </div>} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
  }

}

const mapStateToProps = ({app: {appReducer}}) => {
    return {
        message: appReducer
    };
};

const mapDispatchToProps = dispatch => ({
  sayHi: () => dispatch(appActions.sayHi()),
  sayYeah: () => dispatch(appActions.sayYeah()),
  doPing: () => dispatch(appActions.doPing())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
