import styled from "styled-components";

export const Part = styled.li`
  display: flex;
  flex-direction: column;
`;
export const NumberTime = styled.p`
  font-size: 60px;
  font-weight: 300;
  margin: 0;
  text-shadow: 3px 3px 3px rgba(0 0 0 / 0.3);
  font-family: "Fira Sans", sans-serif;
  font-variant-numeric: tabular-nums;
`;
export const Unit = styled.p`
  margin: -1.2em 0 0;
  user-select: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
`;
