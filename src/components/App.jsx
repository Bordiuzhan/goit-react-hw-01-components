import user from '../dataJson/user';
import data from '../dataJson/data';
import friends from '../dataJson/friends';
import transactions from '../dataJson/transactions';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './Transaction';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <div>
        <Profile user={user}></Profile>
      </div>
      <div>
        <Statistics title="Upload stats" data={data}></Statistics>
        <Statistics data={data}></Statistics>
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </Layout>
  );
};
