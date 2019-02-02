export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

//this is an ActionCreator
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}
