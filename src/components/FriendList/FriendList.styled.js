import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  list-style: none;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
`;

export const Status = styled.span`
  border-radius: 50%;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background: ${p => {
    return p.isOnline ? `red` : `green`;
  }};
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  display: inline-block;
`;
