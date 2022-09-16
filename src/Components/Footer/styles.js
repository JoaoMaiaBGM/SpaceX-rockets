import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 38px;

  display: flex;
  align-items: center;

  position: absolute;
  bottom: 0;

  background-color: #ffffff;
  box-shadow: 0px -6px 8px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 700px) {
    height: 100px;
  }
`;

export const FooterMain = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  .logoContainer {
    /* width: 100%;
    height: 100%; */

    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;

      color: #000000;
    }
  }

  .footerNav {
    width: 200px;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
      height: 50%;
    }

    a {
      color: inherit;
      text-decoration: none;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;

      color: #000000;

      cursor: pointer;
    }
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #000000;
  }
`;
