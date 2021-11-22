import styled from "styled-components";

export const AsideUser = styled.aside`
  margin: 0 auto;
  padding: 0 2%;

  button {
    width: 300px;
    height: 40px;
    background-color: var(--gray-0);
    font-size: var(--heading3);
    color: var(--gray-50);
  }
  .box-user {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    background-color: var(--color-primary);
    padding: 10px;
    margin: 50px 0 0 0;
    border-radius: 10px 10px 0 0;

    figure {
      width: 30%;
      img {
        width: 100%;
        border-radius: 50%;
        padding: 10px;
      }
    }

    div {
      width: 70%;

      h2 {
        font-size: var(--heading3);
        color: var(--gray-0);
      }

      p {
        color: var(--gray-0);
      }
    }
  }
`;

export const ContactUser = styled.div`
  width: 300px;
  ul {
    padding: 0 20px;
    list-style: none;
    li {
      display: flex;
      flex-direction: row;
      margin: 20px 0;
      background-color: ${(props) =>
        props.Colorprimary ? "#11995e1a" : "#11995e1a"};
      .img-contato {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 70px;
        background-color: var(--color-primary);
        color: white;
        font-size: 30px;
      }

      .img-email {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 70px;
        background-color: var(--color-secondary);
        color: white;
        font-size: 30px;
      }

      p {
        margin: 0 20px;
        font-size: 20px;
      }
    }
  }
`;
