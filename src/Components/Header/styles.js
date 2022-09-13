import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 100px;

  background-color: inherit;

  .headerMain {
    width: 85%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .logoContainer {
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

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
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
  }

  nav {
    width: 40%;
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
  }

  .inputContainer {
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      width: 280px;
      height: 42px;

      border-radius: 25px;
      border: solid 1px #ffffff;

      padding: 0 15px;
      background-color: inherit;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 21px;

      color: rgba(255, 255, 255, 0.55);
    }

    svg {
      width: 18px;
      height: 18px;

      margin-left: -50px;

      color: rgba(255, 255, 255, 0.55);
    }
  }
`;
