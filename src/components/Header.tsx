import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import s from "./Header.module.css"
import GirlIcon from "../images/GirlIcon"
import ContactsIcon from "../images/ContactsIcon"
import PortfolioIcon from "../images/PortfolioIcon"
import BurgerIcon from "../images/BuregerIcon"
import BurgerMenu from "./BurgerMenu"

function Header() {
  const [show, setShow] = React.useState<boolean>(false)
  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)
  const navigate = useNavigate()

  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <button className={s.logo_container} onClick={() => navigate("/")}>
          <img src={require("../images/logo.png")} alt="logo"></img>
        </button>
        <div className={s.icons_container}>
          <button
            className={s.header_button}
            onClick={() => navigate("/about")}
          >
            <GirlIcon />
            <div>About me</div>
          </button>
          <button
            className={s.header_button}
            onClick={() => navigate("/portfolio")}
          >
            <PortfolioIcon />
            <div>Portfolio</div>
          </button>
          <button
            className={s.header_button}
            onClick={() => navigate("/contacts")}
          >
            <ContactsIcon />
            <div>Contacts</div>
          </button>
        </div>
        {!show && (
          <button className={s.burger_menu} onClick={openModal}>
            <BurgerIcon />
          </button>
        )}
        <BurgerMenu closeModal={closeModal} show={show} />
      </div>
    </div>
  )
}

export default Header
