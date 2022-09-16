import styled from "styled-components";
import ModalBackground from "../../Assets/stars.svg";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;

  display: ${(props) => (props.isOpenModalCard ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(155, 155, 155, 0.25);
`;

export const Modal = styled.div`
  width: 30%;
  height: 60vh;

  background-image: url(${ModalBackground});
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 8px;
  padding: 18px;

  -webkit-animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  .cardInfo {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    line-height: 50px;

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;

      text-decoration: underline;
      color: #ffffff;

      text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25);
    }

    p {
      width: 90%;
      margin-top: -20px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;

      text-align: justify;
      line-height: 20px;
    }
  }
`;
