import React from 'react';
import './App.scss';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import Main from "./containers/Main/Main";

class App extends React.Component{

  render() {

    let routes = (
      <Switch>
        {/*<Route path={'/logout'} component={Logout}/>*/}
        <Route path={'/'} component={Main} exact/>
        <Redirect to={'/'}/>
      </Switch>
    );

    return (
      <Layout>
        {routes}
      </Layout>
    )
  }
}

export default withRouter(App);
