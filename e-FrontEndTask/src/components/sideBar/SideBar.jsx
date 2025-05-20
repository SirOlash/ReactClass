import React from 'react'
// import Style from "./SideBar.module.css";
import { Link } from 'react-router-dom';

const SideBar = ({className}) => { 
  return (

    <div className={className}>
      <ul>
        <li>
          <Link to="/fake-api">Fake Store Api</Link>
        </li>
        <li>
            <Link to="/dummyJson">Dummy JSON</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar;