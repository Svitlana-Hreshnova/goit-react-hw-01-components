import Profile from './Profile/Profile';
import user from 'data/user.json';
import Container from './Container/Container';
import data from 'data/data.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

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
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};

export default App;
