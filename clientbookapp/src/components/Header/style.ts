import styled from "styled-components";
export const HeaderS = styled.header`
  color: var(--color-white);
  padding: 25px;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      h1 {
        color: var(--color-microHover);
        font-size: 1.5rem;
      }
      h4 {
        font-size: 1rem;
      }
      p {
        font-size: 0.75rem;
      }
    }

    button {
      cursor: pointer;
      color: var(--color-white);
      height: 32px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      background-color: var(--color-grey-3);
      padding: 0px 16px;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        background-color: var(--color-grey-2);
      }
    }
  }
`;
