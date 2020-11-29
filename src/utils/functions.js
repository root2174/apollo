/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
export function nCommonFriends(user1, user2) {
  const user1Friends = user1.friends;
  const user2Friends = user2.friends;

  const commonFriends = user1Friends.filter((value) =>
    user2Friends.includes(value)
  );

  return commonFriends.length;
}

export function nCommonInterests(user1, user2) {
  const user1Interests = user1.interests.split(',');
  const user2Interests = user2.interests.split(',');

  const commonInterests = user1Interests.filter((value) =>
    user2Interests.includes(value)
  );

  return commonInterests.length;
}

export function commonCity(user1, user2) {
  const user1City = user1.city;
  const user2City = user2.city;

  return user1City === user2City ? 1 : 0;
}

export function commonState(user1, user2) {
  const user1State = user1.state;
  const user2State = user2.state;

  return user1State === user2State ? 1 : 0;
}

export function commonSum(user1, user2) {
  return (
    nCommonFriends(user1, user2) +
    nCommonInterests(user1, user2) +
    commonCity(user1, user2) +
    commonState(user1, user2)
  );
}

export function rFriends(user1, user2) {
  return user1.friends.includes(user2.id);
}

export function friendsOfFriends(currentUser, graph) {
  // CURRENT USER FRIENDS
  const userFriends = currentUser.friends;
  const friendsOfFriendsIdsArr = [];
  for (const user of graph) {
    if (userFriends.includes(user.id)) {
      friendsOfFriendsIdsArr.push(...user.friends);
    }
  }
  return graph.filter((user) => friendsOfFriendsIdsArr.includes(user.id));
}

export function recommendations(currentUser, graph) {
  let possibleFriends = friendsOfFriends(currentUser, graph);
  // FILTER OUT AREADY ADDED FRIENDS
  possibleFriends = possibleFriends.filter((friend) => {
    const { friends } = currentUser;
    return !friends.includes(friend.id);
  });
  const possibleFriendsSum = possibleFriends.map((friend) => {
    return {
      ...friend,
      sum: commonSum(currentUser, friend),
    };
  });
  return possibleFriendsSum.sort((a, b) => a.sum - b.sum);
}
