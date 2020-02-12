import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Cotizacion = ( { resultado } ) => {

  // Validar si el objeto esta vacío
  if (Object.keys(resultado).length === 0) return null;

  return (
    <Fragment>
      <div className="card mb-2">
        <div className="card-body txt-a-r">
          <h3><b className="txt-secondary af-m">PRICE: &nbsp;</b>{resultado.PRICE}</h3>
          <hr />
          <p><span className="txt-brand-2 af-m">Highest price / day:</span> {resultado.HIGHDAY} <i className="a-first_page i-rot-270 txt-acept"></i></p>
          <p><span className="txt-brand-2 af-m">Lowest price / day:</span> {resultado.LOWDAY} <i className="a-last_page i-rot-270 txt-cancel"></i></p>
          <p><span className="txt-brand-2 af-m">Variation, last 24 hrs: </span>{resultado.CHANGEPCT24HOUR}</p>
          <hr />
          <p className="txt-brand-2 txt-a-c"><small>Last update {resultado.LASTUPDATE}</small></p>
        </div>
      </div>
      <hr className="hr-w"/>
    </Fragment>
  );
};

Cotizacion.propTypes = {
  resultado: PropTypes.object.isRequired,
}

export default Cotizacion