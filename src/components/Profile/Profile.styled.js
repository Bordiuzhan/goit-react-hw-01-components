import styled from 'styled-components';

export const ProfileWrap = styled.div`
  background: white;
  border: 3px solid black;
  margin: 5px;
  margin: auto;
  width: 50%;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  font-weight: bold;
  margin: 30px 0px 10px 0px;
`;

export const ProfileTag = styled.p`
  margin: 0px 0px 10px 0px;
`;

export const ProfileLocation = styled.p`
  margin: 0px 0px 10px 0px;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  background-color: azure;
  margin: 0px;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 100%;
`;

export const StatsListLabel = styled.span``;

export const StatsListQuantity = styled.span`
  font-weight: bold;
`;
