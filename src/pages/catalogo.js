import React from 'react'

import Produto from './produto'
import Produto1 from './produto1'
import Produto2 from './produto2'



function Catalogo () {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-4'>
          <Produto />
        </div>
        <div className='col-md-4'>
          <Produto1 />
        </div>
        <div className='col-md-4'>
          <Produto2 />
        </div>        
      </div>
    </div>
  )
}

export default Catalogo