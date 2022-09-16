import styled from "styled-components";

export const CardContainer = styled.li`
  width: 300px;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  filter: drop-shadow(-4px 6px 2px rgba(255, 255, 255, 0.25));
  border-radius: 10px;
  background-color: #ffffff;

  .cardImage {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 10px;
    background-color: inherit;
    padding-bottom: 10px;

    img {
      width: 100%;
      height: 80%;

      border-radius: 10px;
    }

    .btnDetails {
      width: 70%;
      height: 45px;

      background: #2c165c;
      border-radius: 10px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      align-items: center;
      text-align: center;

      border: none;
      color: #ffffff;

      cursor: pointer;
    }

    .btnDetails:hover {
      background: #247cd7;
      box-shadow: -4px 4px 8px gray;
    }
  }
`;
