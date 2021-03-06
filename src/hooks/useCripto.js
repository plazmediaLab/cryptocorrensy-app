import React, { Fragment, useState } from 'react';


const useCripto = (label, stateInicial, opciones) => {

  // 1.- State de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  // 2.- Estructura "componente" que se mostrara en pantalla
  const Select = () => (
    <Fragment>
      <label>{ label }</label>
      <select
        onChange={(e) => actualizarState(e.target.value)}
        value={state}
      >
        <option value="">--- Select ---</option>
        {opciones.map(opcion => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name} title="LOL">{opcion.CoinInfo.FullName}</option>
        ))};
      </select>
    </Fragment>
  )

  // 3.- Retornar State, Interfaz y Func que modifica al state
  return [state, Select];

};

export default useCripto