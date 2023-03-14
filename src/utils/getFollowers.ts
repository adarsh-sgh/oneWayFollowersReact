/**
 * @param  {} type "followers" | "following"
 */
export async function getFollowList(userId: string, type = "followers") {
  const response = await fetch(
    // !wouldn't work above 100 followers/followings
    `https://api.github.com/users/${userId}/${type}?per_page=100`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  const followList: any = {};
  data.forEach((e: any) => {
    followList[e.login] = true;
  });
  console.log(Object.keys(followList).length);

  return followList;
}
export async function oneWayFollowers(userId: string) {
  const followers = await getFollowList(userId, "followers");
  const following = await getFollowList(userId, "following");
  const onlyFollowing = [];
  const onlyFollowers = [];
  for (const key in following) {
    if (!followers[key]) {
      onlyFollowing.push(key);
    }
  }
  for (const key in followers) {
    if (!following[key]) {
      onlyFollowers.push(key);
    }
  }
  console.log("onlyFollowers", onlyFollowers);
  console.log("only Following", onlyFollowing);
  return { onlyFollowers, onlyFollowing };
}
