import styled from "styled-components";
import ImgTop from "../../Assets/Dashboard_img_top.svg";
import ImgBottom from "../../Assets/Dashboard_img_bottom.svg";

export const IntroContainer = styled.section`
  max-width: 100vw;
  max-height: 100vh;

  background-image: url(${ImgTop});
  background-repeat: no-repeat;
  background-position: center;

  margin-bottom: 40px;

  .introSpaceX {
    width: 60%;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    margin: 0 auto;
    padding-bottom: 30px;

    img {
      width: 400px;
    }

    p {
      width: 100%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 40px;

      display: flex;
      align-items: center;
      text-align: justify;

      color: #000000;

      text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    }

    @media screen and (max-width: 425px) {
      width: 90%;

      img {
        width: 200px;
      }

      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
      }
    }

    /* @media screen and (max-width: 900px) {
      width: 80%;

      p {
        font-weight: 600;
        line-height: 35px;
      }
    } */
  }
`;

export const ProfileContainer = styled.section`
  width: 80vw;
  max-height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 40px;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }

  .ElonMuskImg {
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;

    img {
      width: 60%;
    }

    label {
      width: 60%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 15px;
      display: flex;
      align-items: center;

      color: #828282;
    }

    @media screen and (max-width: 425px) {
      width: 90vw;

      justify-content: center;
      align-items: center;

      margin-bottom: 20px;

      .ElonMuskImg {
        width: 50%;
      }

      label {
        font-size: 12px;
        text-align: justify;
      }
    }

    /* @media screen and (max-width: 900px) {
      justify-content: center;
      align-items: center;

      margin-bottom: 20px;

      label {
        font-size: 12px;
        text-align: justify;
      }
    } */
  }

  .ElonMuskProfile {
    width: 60%;
    height: 100%;

    p {
      width: 100%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;

      display: flex;
      align-items: center;

      color: #000000;
    }

    @media screen and (max-width: 425px) {
      width: 100%;

      p {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
`;

export const HistoryContainer = styled.section`
  max-width: 100vw;
  min-height: 100vh;

  background-image: url(${ImgBottom});
  background-repeat: no-repeat;
  background-position: center;

  .spaceXProfile {
    width: 40%;

    padding: 30px 30px 20px 30px;
    margin-left: 150px;

    @media screen and (max-width: 425px) {
      width: 90%;

      padding: 0;
      margin: 0 auto;
    }

    /* @media screen and (max-width: 900px) {
      width: 55%;

      margin-left: 90px;
    } */
  }

  .historyDescription {
    width: 100%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;

    text-align: justify;

    color: #000000;
    text-shadow: -4px 4px 4px rgba(255, 255, 255, 0.25);

    @media screen and (max-width: 425px) {
      font-size: 15px;
    }

    /* @media screen and (max-width: 900px) {
      font-size: 20px;
    } */
  }
`;
