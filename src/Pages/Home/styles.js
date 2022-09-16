import styled from "styled-components";
import homeBackground from "../../Assets/Homepage_background.svg";

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  margin: 0 auto;

  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;

  div {
    width: 35%;
    height: max-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;

    @media screen and (max-width: 960px) {
      width: 60%;
    }

    @media screen and (max-width: 640px) {
      width: 80%;
    }

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      text-align: center;

      color: #ffffff;

      text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 480px) {
        font-size: 40px;
      }

      @media screen and (max-width: 384px) {
        font-size: 33px;
      }
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;

      text-align: justify;
      line-height: 30px;

      color: #ffffff;

      @media screen and (max-width: 480px) {
        font-size: 19px;
        font-weight: 500;
      }

      @media screen and (max-width: 384px) {
        font-size: 18px;
        font-weight: 500;
      }
    }

    button {
      width: 366px;
      height: 66px;

      background: #b85c38;
      border-radius: 40px;
      border: none;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;

      color: #ffffff;

      cursor: pointer;

      @media screen and (max-width: 384px) {
        width: 266px;
        height: 56px;

        font-weight: 500;
        font-size: 22px;
      }
    }
  }
`;
