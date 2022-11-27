import styled from 'styled-components';

export const StatisticsSection = styled.section`
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
`;

export const StatisticsTitle = styled.h2`
  margin: 0;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  padding: 10px;
  width: 20%;
`;

export const StatisticsLabel = styled.span`
  display: block;
  line-height: 1.5;
`;

export const StatisticsPercentage = styled.span``;
