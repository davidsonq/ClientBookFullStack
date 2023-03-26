import styled from "styled-components";

export const DivListS = styled.div`
  display: flex;
  align-items: center;
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
    border: 1px solid var(--color-white);
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
  }
`;
