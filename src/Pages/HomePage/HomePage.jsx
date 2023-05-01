import { Container, Title, Description, StyledLink } from './HomePage.styled';


const Home = () => {
  return (
    <Container
    >
      <Title>
        Welcome to the tweets App !!! 
      </Title>
      <Description>This App was created as part of the technical training course from the GoIT school</Description>
      <StyledLink to="/tweets">go</StyledLink>
    </Container>
  );
};

export default Home;
