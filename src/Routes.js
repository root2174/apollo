import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DiscoverFriends from './pages/DiscoverFriends/DiscoverFriends';
import MyFriends from './pages/MyFriends/MyFriends';
import SignIn from './pages/SignIn/SignIn';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/my-friends" component={MyFriends} />
        <Route path="/discover-friends" component={DiscoverFriends} />
      </Switch>
    </div>
  );
};

export default Routes;
