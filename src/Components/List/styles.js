import styled from "styled-components";

export const ListContainer = styled.div`
  width: 80%;
  height: max-content;

  margin: 0 auto;

  ul {
    width: 90%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;

    flex-wrap: wrap;
    gap: 30px;
  }
`;
