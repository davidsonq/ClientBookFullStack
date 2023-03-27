import styled from "styled-components";

export const DivS = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  h4 {
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--color-white);
  }

  & > button:first-of-type {
    background-color: var(--color-microHover);
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      background-color: var(--color-micro);
    }
  }

  & > button:nth-of-type(2) {
    background-color: var(--color-grey-1);
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      background-color: var(--color-grey-2);
    }
  }
  & > button {
    cursor: pointer;
    height: 30px;
    padding: 0 20px;
    margin-bottom: 30px;
    border: none;
    border-radius: 4px;
    color: var(--color-white);
  }
`;
