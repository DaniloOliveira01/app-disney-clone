import styled from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

export const BgImage = styled.img`
  width: 100vw;
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/image/login-background.jpg");
  position: absolute;
  z-index: -1;
`;

export const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column; width: 100%;
`;

export const CtaImg = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  width: 100%;
`;

export const SignUp = styled.a`
  font-weight: 500;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
    transition: 0.6s;
  }
`;

export const Description = styled.p`
  color: hsla(0, 0%,93.5%, 1);
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CtaLogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;