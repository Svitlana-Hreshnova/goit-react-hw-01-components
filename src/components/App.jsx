import Profile from './Profile/Profile'
import user from '../user.json'
import Container from './Container/Container';

const App = () => {
  return (
    <>
      <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        </Container>
    </>
  )
};

export default App;

