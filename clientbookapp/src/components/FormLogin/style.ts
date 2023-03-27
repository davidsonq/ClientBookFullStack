import styled from "styled-components";

export const ButtonS = styled.button`
  cursor: pointer;
  width: 100%;
  height: 37px;
  background-color: var(--color-microHover);
  border: 1px solid var(--color-micro);
  color: #ffffff;
  font-size: 0.813rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 13px;
  @media (min-width: 435px) {
    & {
      height: 42px;
      font-size: 1rem;
      transition: 0.5s;
    }
    &:hover {
      transition: 0.5s;
      background-color: var(--color-micro);
      border: 1px solid var(--color-micro);
    }
  }
`;
