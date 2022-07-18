import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className='page error-page-bg'>
        <div className='error-page-icon'><i className="fa-solid fa-circle-exclamation error-icon"></i></div>
        <p className='error-page-text'>The page you are looking for does not exist.!</p>
        <Link to='/'><button className='btn error-page-button'>Go to Home</button></Link>
    </div>
  )
}

export default Error