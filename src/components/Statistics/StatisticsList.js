import PropTypes from 'prop-types';
import { List, Item, Label, Percentage } from './Statistics.styled';

export const StatisticsData = ({ data }) => {
  return (
    <List>
      {data.map(({ id, label, percentage }) => (
        <Item key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </List>
  );
};

StatisticsData.propTypes = {
  data: PropTypes.array.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
