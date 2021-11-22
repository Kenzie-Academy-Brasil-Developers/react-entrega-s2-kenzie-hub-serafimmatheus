import styled from "styled-components";

export const HeaderLogin = styled.header`
  @media screen and (min-width: 320px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      font-size: var(--heading2);

      span {
        display: inline-block;
        background-color: var(--color-primary);
        color: var(--gray-0);
        padding: 0 8px;
      }
    }
  }
`;

export const DivForm = styled.div`
  @media screen and (min-width: 320px) {
    padding: 50px 0;
    width: 300px;
    border: 2px solid var(--gray-0);

    form {
      span {
        display: block;
        text-align: center;
        margin: 10px 0;
      }
    }

    button {
      width: 200px;
      margin: 0 auto;
      background-color: var(--gray-0);
      color: var(--gray-50);
    }
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    form {
      width: 400px;
    }
  }
`;

export const DivCadastro = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    margin-left: 10px;
    margin-top: 30px;
    p {
      display: flex;
      align-items: center;

      span {
        margin-left: 6px;
        .link {
          color: var(--color-primary);
        }
      }
    }
  }
`;
