import React from 'react';
import styled from '@emotion/styled';


const GridDiv = styled.div`
  background-color: var(--indigo-dark-1);
  border-color: var(--indigo-dark-1);
 
  > div{
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    > div:first-child{
      text-align: center;
      color: var(--secondary);
    }
    > div:nth-child(2){
      text-align: center;
      color: var(--plaz-bright);
    }
    > p{
      text-align: center;
      color: var(--plaz-bright);
    }
  }
`;



const Spinner = () => {
  return (
    <GridDiv className="card mb-2">
      <div className="card-body">
        <div>
          <i className="a-autorenew i-spin-r af-x2 txt-secondary"></i>
        </div>
        <div>
          <i className="a-plaz-astronaut af-x3 txt-primary-light"></i>
        </div>
        <p>Quoting . . .</p>
      </div>
    </GridDiv>
  );
};

export default Spinner