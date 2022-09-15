import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isOpenModalCard ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(155, 155, 155, 0.25);
`;
