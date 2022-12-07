import React from 'react'
import "./header.css"

const Header = () => {
  return (
   <div className="header">
  <div className="headerTitles">
    <span className='headerTitleSm'>React & Node</span>
    <span className='headerTitleLg'> Blog</span>
  </div>
  <img className='headerImg'
  src="https://images.pexels.com/photos/11640926/pexels-photo-11640926.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
   </div>
  )
}

export default Header