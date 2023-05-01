import {
  Wrapper,
  Background,
  Logo,
  Box,
  Card,
  Description,
  Line,
  Cirle,
  Avatar,
} from './Tweet.styled';
import Button from 'components/Button';
import DEFAULT_AVATAR from 'images/avatar.png';

const TweetCard = ({ id, tweets, followers, avatar, onClick, isFollower }) => {
  return (
    <Wrapper>
      <Card>
        <Logo />
        <Background />
        <Line />
        <Cirle>
          <Avatar src={avatar || DEFAULT_AVATAR} alt="user avatar" />
        </Cirle>
        <Description>
          <Box>
            {tweets}
            <span>&#32;tweets</span>
          </Box>
          <Box>
            {new Intl.NumberFormat('en-US').format(followers)}
            <span>&#32;followers</span>
          </Box>
        </Description>
        <Button isFollower={isFollower} onClick={() => onClick(id)}>
          {isFollower ? 'following' : 'follow'}
        </Button>
      </Card>
    </Wrapper>
  );
};

export default TweetCard;
