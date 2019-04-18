import React, {Component} from "react";
import { connect } from "react-redux";
import {appActions} from './ducks/';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Landing from "../landing/";
import History from "../history/";

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
            <Switch>
                <Route exact path="/" component={History}/>
                <Route path="/test" render={() => <div> This is Test </div>} />
            </Switch>
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
