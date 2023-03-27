import styled from "styled-components";

export const DivListS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: var(--color-white);
    font-size: 1rem;
    text-align: center;
  }
`;
export const UlS = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 30px;
  color: var(--color-white);
  li {
    display: flex;
    padding: 10px;
    width: 325px;
    flex-direction: row;

    gap: 20px;
    flex-wrap: wrap;
    border-radius: 2px;
    border: 2px solid var(--color-microHover);
    h3 {
      font-size: 1rem;
      font-weight: 500;
    }
    p {
      font-size: 0.75rem;
      display: flex;
      gap: 4px;
      align-items: center;
    }
    button {
      cursor: pointer;
      border-radius: 50%;
      width: 35px;
      height: 35px;
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
      background-color: var(--color-negative);
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        background-color: #ff163d;
      }
    }
  }
`;
