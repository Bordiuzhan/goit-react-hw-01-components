import PropTypes from 'prop-types';
import { StatisticsLists } from './StatisticsList';
import { StatisticsSection, StatisticsTitle } from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticsLists data={data}></StatisticsLists>
    </StatisticsSection>
  );
};
