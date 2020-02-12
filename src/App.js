import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './img/cryptocurrency.png'

import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';


const Contenedor = styled.div`
  margin-top: 2rem;
  color: var(--White);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 589px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 15rem;
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

  // STATE
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargarndo, guardarCargarndo] = useState(false);

  // UseEFFECT
  useEffect(() => {
    
    const cotizarResultado = async () => {

      // Confirmar que hay datos
      if (moneda === '') return;
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      // Consultar API
      const resultado = await axios.get(url);

      // Activar el componente Spinner
      guardarCargarndo(true);

      setTimeout(() => {
        // Desactivar el componente Spinner
        guardarCargarndo(false);

        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 1200);

    };
    cotizarResultado();  
  }, [moneda, criptomoneda]);
  
  // Componente a mostrar Cotizacion o Spinner
  const conponente = cargarndo ? <Spinner /> : <Cotizacion resultado={resultado}/>

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

        {conponente}

        <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />

      </div>
    </Contenedor>
  );
}

export default App;
