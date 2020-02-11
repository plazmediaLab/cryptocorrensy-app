import React from 'react';
import styled from '@emotion/styled';
import imagen from './img/cryptocurrency.png'


const Contenedor = styled.div`
  margin-top: 2rem;
  color: var(--White);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 589px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 40rem;
    align-items: end;

    .grid-1{
      grid-row: 2 / 3;
      overflow: hidden;
      opacity: .3;
    }
  }
`;
const TituloH1 = styled.h1`
  font-family: var(--font-1);
  font-weight: 700;
  font-size: 4rem;
  text-align: right;
  position: relative;

  &::before{
    content: '';
    background-color: var(--turquoise-light-1);
    position: absolute;
    bottom: -1.7rem;
    right: 0;
    width: 20rem;
    height: .4rem;
  }

  @media (max-width: 589px) {
    text-align: center;
    
    &::before{
      bottom: -1.7rem;
      right: 27%;
      width: 20rem;
      height: .4rem;
    }
  }
`;


function App() {
  return (
    <Contenedor className="container">
      <div className="grid-1">
        <img 
          src={imagen}
          alt='Cryptocurrency Wallpaper'
        />
      </div>
      <div className="grid-2">
        <TituloH1 className="font-1">Cryptocurrencies instantly</TituloH1>
      </div>
    </Contenedor>
  );
}

export default App;
