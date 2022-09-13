import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;

  background-color: inherit;

  .headerMain {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media screen and (min-width: 700px) {
      flex-direction: row;
    }
  }

  .logoContainer {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 700px) {
      width: 80%;
    }

    @media screen and (min-width: 900px) {
      width: 30%;
    }

    img {
      width: 40px;
      height: 40px;
    }

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;

      color: #ffffff;
    }
  }

  .sectionContainer {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    line-height: 50px;

    @media screen and (min-width: 700px) {
      width: 100%;
      height: 70%;

      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width: 900px) {
      width: 65%;
      flex-direction: row;
    }

    nav {
      width: 250px;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;

      color: #ffffff;

      a {
        color: inherit;
        text-decoration: none;
      }

      @media screen and (min-width: 700px) {
        height: 100%;
      }

      @media screen and (min-width: 900px) {
        width: 60%;
        flex-direction: row;
      }
    }

    .inputContainer {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      margin-right: 20px;

      @media screen and (min-width: 700px) {
        height: 100%;
      }

      input {
        width: 250px;
        height: 42px;

        border-radius: 25px;
        border: solid 1px #ffffff;

        padding: 0 10px;
        background-color: inherit;

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;

        color: rgba(255, 255, 255, 0.55);
      }

      svg {
        width: 20px;
        height: 20px;

        margin-left: -40px;

        color: rgba(255, 255, 255, 0.55);

        cursor: pointer;
      }
    }
  }
`;
