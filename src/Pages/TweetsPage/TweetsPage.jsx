import TwetsList from 'components/TweetsList';
import Filter from 'components/Filter';
import { Wrapper, GoBack, Header } from './TweetsPage.styled';

import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Tweets = () => {
  const [filter, setFilter] = useState('show all');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Wrapper>
      <Header>
        <GoBack to={backLinkHref}>&#129128; back</GoBack>
        <Filter onClick={setFilter} />
      </Header>
      <TwetsList filter={filter} />
    </Wrapper>
  );
};

export default Tweets;
