import styled from "styled-components";

export const TimerSection = styled.section`
  color: white;
  background: rgba(255 255 255 / 0.1);
  border-radius: 16px;
  width: 430px;
  padding: 10px 30px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Parts = styled.ul`
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Part = styled.li`
  display: flex;
  flex-direction: column;
`;
export const Number = styled.p`
  font-size: 60px;
  font-weight: 300;
  margin: 0;
  text-shadow: 3px 3px 3px rgba(0 0 0 / 0.3);
  font-family: "Fira Sans", sans-serif;
  font-variant-numeric: tabular-nums;
`;
export const Colon = styled.li`
  font-size: 60px;
  font-weight: 300;
  margin: 0;
  text-shadow: 3px 3px 3px rgba(0 0 0 / 0.3);
  font-family: "Fira Sans", sans-serif;
  font-variant-numeric: tabular-nums;
  margin-top: -0.07em;
  margin-right: 0.05em;
`;

export const Unit = styled.p`
  margin: -1.2em 0 0;
  user-select: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
`;

export const BtnToggle = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 3px 3px 3px rgba(0 0 0 / 0.3);
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:hover {
    background-color: rgba(255 255 255 / 0.3);
  }
`;
