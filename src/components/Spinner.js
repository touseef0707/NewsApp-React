import React from 'react'
import loading from './loading.gif'
import loadingdark from './loadingdark.gif'


const Spinner = (props) => {
    return (
      <div className='text-center'>
        <img src={props.mode==="light"?loading:loadingdark} alt="loading..." />
      </div>
    )
}

export default Spinner
