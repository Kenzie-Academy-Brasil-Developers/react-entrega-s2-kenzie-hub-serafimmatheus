import styled from "styled-components";

export const SectionTecs = styled.section`
  @media screen and (min-width: 320px) {
    width: 100%;
    max-width: 300px;
    margin: 50px auto 5px auto;

    display: flex;
    flex-direction: column;
    padding: 0 20px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        margin-right: 60px;
        text-align: center;
        font-size: var(--heading5);
      }

      p.p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background-color: var(--color-secondary);
        color: white;
        font-size: 30px;
        cursor: pointer;
      }
    }

    ul {
      list-style: none;
      margin-top: 20px;
      li {
        position: relative;
        display: flex;
        border-right: 5px solid var(--gray-0);
        margin: 0 0 20px 0;

        button {
          display: none;
          text-align: center;
          line-height: 20px;
          width: 20px;
          height: 20px;
          position: absolute;
          top: 0;
          right: 10px;
          border-radius: 50%;
          border: none;
          background-color: var(--color-secondary);
          color: var(--gray-0);
          cursor: pointer;
        }

        figure {
          width: 71px;
          height: 77px;
          background-color: rgba(17, 153, 94, 0.1);

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 5px;
          img {
            width: 24px;
            background-color: var(--color-secondary);
            border-radius: 50%;
          }
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-left: 20px;
        }

        :hover {
          border-right: 5px solid var(--color-secondary);
          transition: 1s;
          transition-delay: 0.2s;
          figure {
            background-color: rgba(17, 153, 94);
            transition: 1s;
            transition-delay: 0.2s;
          }
          button {
            display: block;
            transition: 1s;
            transition-delay: 0.2s;
          }
        }
      }
    }
  }
`;
