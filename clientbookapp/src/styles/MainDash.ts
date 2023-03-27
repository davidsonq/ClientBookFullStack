import styled from "styled-components";

export const MainS = styled.main`
  padding: 25px;
  & > div {
    & > button {
      cursor: pointer;
      border-radius: 4px;
      color: var(--color-white);
      background-color: var(--color-microHover);
      border: none;
      padding: 10px;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        background-color: var(--color-micro);
      }
    }
  }
`;

export const ContatoS = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  gap: 20px;
`;
