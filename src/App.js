import Markup from './components/Markup/Markup';
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userInfo from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

function App() {
  return (
    <Markup>
      <Title text="Task One. Social Media Profile" />
      <Profile
        name={userInfo.name}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Title text="Task Two. Statistics" />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <Title text="Task Three. Friends List" />
      <FriendList friends={friends} />
      <Title text="Task Four. Transactions History" />
      <TransactionHistory items={transactions} />
    </Markup>
  );
}

export default App;
