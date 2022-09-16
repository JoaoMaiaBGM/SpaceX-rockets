import styled from "styled-components";

export const ListContainer = styled.div`
  width: 80%;
  height: max-content;

  margin: 0 auto;

  @media screen and (max-width: 875px) {
    margin-top: 90px;
  }

  ul {
    width: 90%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;

    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 20px;

    @media screen and (max-width: 875px) {
      width: 100%;
      height: 100vh;

      flex-direction: column;
      overflow-x: scroll;
    }
  }
`;
