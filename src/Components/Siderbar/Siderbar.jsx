import React from 'react'
import "./siderbar.css"
const Siderbar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="https://images.pexels.com/photos/14559395/pexels-photo-14559395.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis animi similique deserunt asperiores. </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
CATEGORIES
            </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    Life
                </li>
                <li className="sidebarListItem">
                    MUSIC
                </li>
                <li className="sidebarListItem">
                    Style
                </li>
                <li className="sidebarListItem">
                   Sports
                </li>
                <li className="sidebarListItem">
                   Tech
                </li>
                <li className="sidebarListItem">
                   Cinema
                </li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
FOLLOW US
            </span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        
            </div>
        </div>
    </div>
  )
}

export default Siderbar