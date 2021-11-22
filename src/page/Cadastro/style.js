import styled from "styled-components";

export const HeaderCadastro = styled.header`
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

export const DivFormCadastro = styled.div`
  @media screen and (min-width: 320px) {
    form {
      button {
        width: 100px;
        background-color: var(--color-secondary);
        color: var(--gray-0);
        margin: 15px auto 15px auto;
      }
      select {
        width: 235px;
        padding: 8px;

        margin-left: 10px;
        border: 1px solid var(--color-primary);
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 350px;
    form {
      select {
        width: 330px;
      }
    }
  }
`;

export const DivLogin = styled.div`
  @media screen and (min-width: 320px) {
    margin-left: 15px;
  }
`;
