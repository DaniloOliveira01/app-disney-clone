import { BgImage, Container, Content, CTA, CtaImg, CtaLogoTwo, Description, SignUp } from "./styles";
import LoginBG from '../../assets/image/login-background.jpg'
import CtaLogin from '../../assets/image/cta-logo-one.svg'
import CtaTwoLogin from '../../assets/image/cta-logo-two.png'

export function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CtaImg 
          src={CtaLogin} />
          <SignUp>ASSINE POR R$ 23,90*</SignUp>
          <Description>
            Assine agora e assista de onde quiser por apenas 
            <span> R$ 23,90 mensais</span>!
          </Description>
          <CtaLogoTwo src={CtaTwoLogin} />
        </CTA>
        <BgImage 
        src={LoginBG} />
      </Content>
    </Container>
  );
}