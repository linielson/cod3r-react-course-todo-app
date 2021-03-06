import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

//By function, becase does not have state
export default (props) => (
  <div className='container'>
    <Menu />
    <Routes />
  </div>
)
