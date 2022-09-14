import LogoWalk from "../../Assets/bx_bx-walk.svg";

import { FooterContainer, FooterMain } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterMain>
        <div className='logoContainer'>
          <img src={LogoWalk} alt='desenho de um boneco em movimento' />
          <h2>SpaceRockets</h2>
        </div>

        <div className='footerNav'>
          <a
            href='https://github.com/r-spacex/SpaceX-API/blob/master/docs/rockets/v4/all.md'
            target='_blank'
            rel='noreferrer'>
            API
          </a>
          <a href='https://www.spacex.com/' target='_blank' rel='noreferrer'>
            SpaceX
          </a>
          <a
            href='https://github.com/JoaoMaiaBGM/SpaceX-rockets'
            target='_blank'
            rel='noreferrer'>
            Github
          </a>
        </div>

        <span>©2022, All right reserved.</span>
      </FooterMain>
    </FooterContainer>
  );
}
