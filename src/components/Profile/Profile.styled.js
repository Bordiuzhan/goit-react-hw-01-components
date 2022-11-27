import styled from 'styled-components';

export const ProfileWrap = styled.div`
  padding-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: bold;
  margin: 30px 0px 10px 0px;
`;

export const Tag = styled.p`
  margin: 0px 0px 10px 0px;
  color: #808080;
`;

export const Location = styled.p`
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

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #808080;
  width: 100%;
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-weight: bold;
`;
