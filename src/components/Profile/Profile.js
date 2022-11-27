import PropTypes from 'prop-types';
import {
  ProfileWrap,
  ProfileDescription,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  StatsList,
  StatsItem,
  StatsListLabel,
  StatsListQuantity,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileWrap>
      <ProfileDescription>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName> {username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <StatsList>
        <StatsItem>
          <StatsListLabel>Followers</StatsListLabel>
          <StatsListQuantity>{stats.followers}</StatsListQuantity>
        </StatsItem>
        <StatsItem>
          <StatsListLabel>Views</StatsListLabel>
          <StatsListQuantity>{stats.views}</StatsListQuantity>
        </StatsItem>
        <StatsItem>
          <StatsListLabel>Likes</StatsListLabel>
          <StatsListQuantity>{stats.likes}</StatsListQuantity>
        </StatsItem>
      </StatsList>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
