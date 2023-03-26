import styled from "styled-components";
export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 19px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    background-color: var(--color-grey-3);
    color: var(--color-white);
    border-radius: 3px;
    height: 380px;
    width: 85%;
    gap: 25px;
    max-width: 369px;
    h2 {
      font-size: 1.125rem;
    }
    span {
      font-size: 0.75rem;
      a {
        text-decoration: none;
        color: var(--color-micro);
      }
    }
  }
  @media (min-width: 435px) {
    form {
      padding: 30px 22.5px 19px;
      height: 502px;
      h2 {
        font-size: 1.5rem;
        margin-top: 20px;
      }
      span {
        font-size: 1rem;
      }
    }
  }
`;
