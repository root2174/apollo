import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DiscoverFriends from './pages/DiscoverFriends/DiscoverFriends';
import MyFriends from './pages/MyFriends/MyFriends';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/my-friends" component={MyFriends} />
        <Route path="/discover-friends" component={DiscoverFriends} />
      </Switch>
    </>
  );
};

export default Routes;
