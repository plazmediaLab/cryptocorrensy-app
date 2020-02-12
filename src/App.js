import React from 'react';
import styled from '@emotion/styled';
import imagen from './img/cryptocurrency.png'

import Titulo from './components/Titulo';
import Formulario from './components/Formulario';


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
    .grid-2{
      z-index: 0;
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
        <Titulo tittle='Cryptocurrencies instantly' />
        <hr className="hr-w" />

        <Formulario />

      </div>
    </Contenedor>
  );
}

export default App;
