import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import PropTypes from 'prop-types';

import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';


const BtnSubmitInput = styled.input`
  background-color: var(--turquoise-light-1)!important;
  border: .1rem solid var(--turquoise-light-1)!important;
  color: var(--turquoise-dark-1)!important;
  font-weight: 700;

  :hover{
    background-color: var(--turquoise-light-2)!important;
    border: .1rem solid var(--turquoise-light-2)!important;
    color: var(--turquoise-dark-1)!important;
  }
  :active{
    background-color: var(--turquoise)!important;
    border: .1rem solid var(--turquoise)!important;
    color: var(--turquoise-dark-1)!important;
  }
`;


const Formulario = ( { guardarMoneda, guardarCriptomoneda } ) => {

  // STATE
  const [listaCripto, guardarListaCripto] = useState([]);
  const [error, guardarError] = useState(false);

  const labelMonedas = 'Select your currency:';
  const MONEDAS = [
    {codigo: 'MXN', nombre: 'Peso Mexicano'},
    {codigo: 'USD', nombre: 'Dolar Estados Unidos'},
    {codigo: 'EUR', nombre: 'Euro'},
    {codigo: 'GBP', nombre: 'Libra Esterlina'}
  ]
  const labelCripto = 'Cryptocurrency:';


  // Utilizar useMoneda
  const [monedas, SelectMoneda] = useMoneda(labelMonedas, '', MONEDAS);
  // Utilizar useCripto
  const [criptomonedas, SelectCripto] = useCripto(labelCripto, '', listaCripto);

  // Ejecutar llamada a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

      const resultado = await axios.get(url);
      
      guardarListaCripto(resultado.data.Data);
    };

    consultarAPI();
  }, []);

  // Submit formulario
  const cotizarMoneda = (e) => {
    e.preventDefault();
    
    // Validar si el formulario esta vacío
    if (monedas === '' || criptomonedas === '') {
      guardarError(true);
      return;
    }

    // Pasar el resultado al componente principal
    guardarError(false);
    guardarMoneda(monedas)
    guardarCriptomoneda(criptomonedas)
  };

  return (
    <form 
      className="form-group"
      onSubmit={cotizarMoneda}
    >
      {error ? <p className="msn msn-s-cancel"><i className="a-info-warning"></i>&nbsp; All fields are required</p> : null}
      
      <div className="form-item">
        <SelectMoneda />
      </div>
      <div className="form-item">
        <SelectCripto />
      </div>

      <BtnSubmitInput 
        type="submit"
        className="btn btn-br btn-100 btn-blue"
        value="Cryptocurrency Quote"
      />
    </form>
  );
};


Formulario.propTypes = {
  guardarMoneda: PropTypes.func.isRequired,
  guardarCriptomoneda: PropTypes.func.isRequired,
}


export default Formulario