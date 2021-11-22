import styled from "styled-components";

export const ModalWork = styled.div`
  z-index: 999;
  display: ${(props) => (props.isModal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    width: 300px;
    background-color: var(--gray-0);
    margin: 30px auto 0 auto;
    border-radius: 8px;

    .new-tec {
      display: flex;
      padding: 5px 0 10px 0;

      h2 {
        font-size: var(--heading4);
        margin-right: 70px;
        margin-left: 10px;
        margin-top: 10px;
      }

      p {
        margin-top: 10px;
        cursor: pointer;
      }
    }

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-top: 2px solid #ccc;
      padding: 20px 0;
      input {
        width: 90%;
        height: 40px;
        padding: 8px;
        background-color: #ccc;
        border: none;
        ::placeholder {
          color: var(--gray-0);
        }
      }

      textarea {
        width: 90%;
        height: 100px;
        margin: 15px 0;
        padding: 8px;
        resize: none;
      }

      button {
        width: 270px;
        height: 40px;
        background-color: var(--color-primary);
        color: var(--gray-0);
        border-radius: 8px;
      }
    }
  }
`;
