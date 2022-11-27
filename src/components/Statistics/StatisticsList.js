import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const StatisticsLists = ({ data }) => {
  return (
    <StatisticsList>
      {data.map(({ id, label, percentage }) => (
        <StatisticsItem key={id}>
          <StatisticsLabel>{label}</StatisticsLabel>
          <StatisticsPercentage>{percentage}%</StatisticsPercentage>
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};

StatisticsLists.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
