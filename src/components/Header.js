import React from "react"
import "./Header.css"
import TeslaLogo from "../assets/teslaLogoSmall.svg"
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="Tesla Logo" />
      </div>

      <div className="header__center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>  

      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
      <div className="header__menuIcon">
        <MenuIcon />
      </div>
    </div>
  )
}

export default Header