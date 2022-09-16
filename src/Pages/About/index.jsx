import Header from "../../Components/Header/";
import logoSpaceX from "../../Assets/logo_spacex.svg";
import ElonMuskImg from "../../Assets/Elon_Musk.svg";

import { HistoryContainer, IntroContainer, ProfileContainer } from "./style";

export default function About() {
  return (
    <>
      <IntroContainer>
        <Header />
        <div className='introSpaceX'>
          <img src={logoSpaceX} alt='logomarca da SpaceX' />
          <p>
            Space Exploration Technologies Corp., cujo nome comercial é SpaceX,
            é uma fabricante de sistemas aeroespaciais, transporte espacial e
            comunicações com sede em Hawthorne, Califórnia. A SpaceX foi fundada
            em 2002 por Elon Musk com o objetivo de reduzir os custos de
            transporte espacial para permitir a colonização de Marte. A SpaceX
            também fabrica os veículos de lançamento Falcon 9 e Falcon Heavy,
            além de vários tipos de motores de foguetes, cápsulas de carga,
            espaçonaves tripuladas e satélites de comunicação Starlink.
          </p>
        </div>
      </IntroContainer>

      <ProfileContainer>
        <div className='ElonMuskImg'>
          <img src={ElonMuskImg} alt='Foto de Elon Musk' />
          <label htmlFor='profile image'>
            Elon Musk, fundador, diretor executivo e diretor técnico da SpaceX;
            CEO da Tesla.
          </label>
        </div>
        <div className='ElonMuskProfile'>
          <p className='profileDescription'>
            Elon Reeve Musk é um empreendedor e filantropo
            sul-africano-canadense, nascido em Pretória em 28 de junho de 1971,
            naturalizado norte-americano. Ele é o fundador, diretor executivo e
            diretor técnico da SpaceX; CEO da Tesla, Inc.; vice-presidente da
            OpenAI, fundador e CEO da Neuralink; co-fundador e presidente da
            SolarCity. Em 7 de janeiro de 2021, com um patrimônio pessoal
            estimado em cerca de 188,5 bilhões de dólares, tornou-se a pessoa
            mais rica do mundo, de acordo com a Bloomberg, ultrapassando o
            empresário Jeff Bezos. No ranking da Forbes, Musk ocupa em 2022 no
            primeiro lugar.
          </p>
        </div>
      </ProfileContainer>

      <HistoryContainer>
        <div className='spaceXProfile'>
          <p className='historyDescription'>
            Com 100 milhões de dólares de sua fortuna inicial, Musk fundou a
            Space Exploration Technologies, ou SpaceX, em maio de 2002. Ele é
            diretor executivo e diretor de tecnologia (CTO) da empresa sediada
            em Hawthorne, Califórnia. A SpaceX desenvolve e fabrica veículos de
            lançamento espacial com foco no avanço do estado da tecnologia de
            foguetes. Os dois primeiros veículos de lançamento da empresa são os
            foguetes Falcon 1 e Falcon 9 (uma homenagem para a Millennium Falcon
            de Star Wars) e sua primeira nave espacial é a Dragon (uma homenagem
            para o filme Puff the Magic Dragon). Em sete anos, a SpaceX projetou
            a família de veículos de lançamento Falcon e a nave espacial
            multiuso Dragon. Em setembro de 2008, o foguete Falcon 1 tornou-se o
            primeiro veículo de financiamento privado a colocar um satélite na
            órbita terrestre. Em 25 de maio de 2012, a Dragon ancorou com a
            Estação Espacial Internacional, fazendo história como a primeira
            empresa comercial a lançar e embarcar um veículo para a EEI. Ao
            trabalhar em conjunto com a NASA, Elon passou a acreditar que a
            humanidade deve ter outra opção para a eventualidade de uma
            catástrofe global, investindo na colonização de Marte e em setembro
            de 2016, ele anunciou um plano para levar humanos e estabelecer uma
            colônia em Marte.
          </p>
        </div>
      </HistoryContainer>
    </>
  );
}
