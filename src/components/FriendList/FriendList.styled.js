import styled from 'styled-components';

export const List = styled.ul``;

export const Item = styled.li``;

export const Status = styled.span`
  border-radius: 50%;
  display: block;
  width: 10px;
  height: 10px;
  background: ${p => {
    return p.isOnline ? `red` : `green`;
  }};
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
