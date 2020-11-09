import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DiscoverFriends from './DiscoverFriends/DiscoverFriends';
import MyFriends from './MyFriends/MyFriends';

const FriendFinder = () => {
  return (
    <div>
      <Switch>
        <Route path="/my-friends">
          <MyFriends />
        </Route>
        <Route path="/discover-friends">
          <DiscoverFriends />
        </Route>
      </Switch>
    </div>
  );
};

export default FriendFinder;
