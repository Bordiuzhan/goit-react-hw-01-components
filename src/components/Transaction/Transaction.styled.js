import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: center;
  background-color: #ffffff;
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);

  thead {
    padding: 10px;
    text-transform: uppercase;
    background-color: #05bdd7;
  }
  th:not(:last-child) {
    border-right: 1px solid #fff;
  }

  td {
    padding: 10px;
  }

  td:not(:last-child) {
    border-right: 1px solid #d3d2d2;
  }

  tr {
    border: 1px solid #d3d2d2;
  }

  tr:nth-child(2n) {
    background: #ecf1f4;
  }
`;
