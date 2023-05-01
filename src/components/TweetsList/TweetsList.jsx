import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import {
  getTweets,
  getTweetsById,
  updatedTweetById,
  getInitialValue,
} from 'services';
import Tweet from 'components/Tweet';
import Button from 'components/Button';

import { List, Wrapper } from './TweetsList.styled';

const TweetsList = ({ filter }) => {
  const [tweets, setTweets] = useState([]);
  const [subscriptions, setSubscriptions] = useState(() => getInitialValue());
  const [page, setPage] = useState(1);
  const limit = 3;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [filtredTweets, setFiltredTweets] = useState([]);

  const itemRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const getFiltredTweets = value => {
      switch (value) {
        case 'follow':
          return tweets.filter(tweet => subscriptions.includes(tweet.id));
        case 'followings':
          return tweets.filter(tweet => !subscriptions.includes(tweet.id));
        default:
          return tweets;
      }
    };
    const filtred = getFiltredTweets(filter);
    setFiltredTweets([...filtred]);
  }, [filter, subscriptions, tweets]);

  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  useEffect(() => {
    setIsLoading(true);
    if (page === 1 && !isFirstRender.current) {
      return;
    }
    async function fetchTweets() {
      try {
        const newTweets = await getTweets(page, limit);
        setTweets(prev => [...prev, ...newTweets]);
        newTweets.length < limit ? setIsLoadMore(false) : setIsLoadMore(true);
      } catch (error) {
        toast.error(`${error.response.data}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTweets();
    isFirstRender.current = false;
  }, [limit, page]);

  const changePage = () => {
    setPage(prev => prev + 1);
  };

  const getIsFollower = id => {
    return subscriptions.includes(id);
  };

  const subscriptionHandler = async id => {
    try {
      const { followers } = await getTweetsById(id);
      const index = tweets.findIndex(tweet => tweet.id === id);
      const isFollower = getIsFollower(id);
      const followersAmount = isFollower ? followers - 1 : followers + 1;
      const updatedTweet = await updatedTweetById(id, followersAmount);
      tweets.splice(index, 1, updatedTweet);
      setTweets([...tweets]);
      setSubscriptions(prev =>
        isFollower ? prev.filter(item => item !== id) : [...prev, id]
      );
    } catch (error) {
      toast.error(`${error.response.data}`);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    const itemHeight = itemRef.current?.firstElementChild?.clientHeight ?? 0;
    if (page > 1 && !isLoading) {
      window.scrollBy({ top: itemHeight * 2, behavior: 'smooth' });
    }
  }, [isLoading, page]);

  return (
    <Wrapper>
      {tweets.length > 0 && (
        <List ref={itemRef}>
          {filtredTweets &&
            filtredTweets.map(({ id, tweets, followers, avatar }) => (
              <Tweet
                key={id}
                id={id}
                tweets={tweets}
                followers={followers}
                avatar={avatar}
                onClick={subscriptionHandler}
                isFollower={getIsFollower(id)}
              />
            ))}
        </List>
      )}
      {isLoadMore && (
        <Button onClick={changePage} isLoadMore disabled={isLoading}>
          {isLoading ? (
            <ThreeDots height="40" width="40" color="#5cd3a8" />
          ) : (
            'Load More'
          )}
        </Button>
      )}
    </Wrapper>
  );
};

export default TweetsList;
