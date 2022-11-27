import PropTypes from 'prop-types';
import { StatisticsData } from './StatisticsList';
import { Section, Title } from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <StatisticsData data={data}></StatisticsData>
    </Section>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};
