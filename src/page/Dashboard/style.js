import styled from "styled-components";

export const HeaderDash = styled.header`
  @media screen and (min-width: 320px) {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      h1 {
        font-size: var(--heading4);

        span {
          display: inline-block;
          background-color: var(--color-primary);
          color: var(--gray-0);
          padding: 0 8px;
        }
      }
    }

    figure {
      width: 50px;

      img {
        border-radius: 50%;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 660px;
    margin: 20px auto 0 auto;
    padding: 30px 20px;
    background-color: var(--gray-0);
    border-radius: 8px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.7);
  }

  @media screen and (min-width: 1024px) {
    max-width: 968px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`;

export const MainDash = styled.main`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    max-width: 968px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const SectionWorks = styled.section``;
export const SectionSobre = styled.section``;
