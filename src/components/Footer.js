import React from 'react'
import heart from '../assets/heart.png';
const Footer = () => {
  return (
 <footer className='footer'>
    <p>
        Made with <img src={heart} alt='love' className='love' /> From Stefano
    </p>
 </footer>
  )
}
export default Footer
