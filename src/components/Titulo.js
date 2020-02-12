import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const TituloH1 = styled.h1`
  font-family: var(--font-1);
  font-weight: 700;
  font-size: 4rem;
  text-align: right;
  position: relative;
  margin-bottom: 3rem;
  display: block;

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
      right: 21%;
      width: 20rem;
      height: .4rem;
    }
  }
`;


const Titulo = ( { tittle } ) => {
  return (
    <TituloH1 className="font-1"> {tittle} </TituloH1>
  );
};


Titulo.propTypes = {
  tittle: PropTypes.string.isRequired,
}


export default Titulo