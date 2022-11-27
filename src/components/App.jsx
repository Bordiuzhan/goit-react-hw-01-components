import user from '../dataJson/user';
import data from '../dataJson/data';
import friends from '../dataJson/friends';
import transactions from '../dataJson/transactions';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <div>
        <Profile user={user}></Profile>
      </div>
      <div>
        <Statistics title="Upload stats" data={data}></Statistics>
      </div>
      <div>
        <FriendList friends={friends} />;
      </div>
    </>
  );
};
