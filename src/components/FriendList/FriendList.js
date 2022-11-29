import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return <FriendListItem friends={friends}></FriendListItem>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
