import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 40px;
`;

export const BgHome = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  position: fixed;
  background: cover center no-repeat;
  inset: 0px;
  opacity: 1;
  z-index: -1;
`;