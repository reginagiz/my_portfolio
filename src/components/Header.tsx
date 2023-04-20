import React, { useState } from "react"
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

  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <div className={s.logo_container}>
          <img src={require("../images/logo.png")}></img>
        </div>
        <div className={s.icons_container}>
          <div className={s.header_button}>
            <GirlIcon />
            <div>About me</div>
          </div>
          <div className={s.header_button}>
            <PortfolioIcon />
            <div>Portfolio</div>
          </div>
          <div className={s.header_button}>
            <ContactsIcon />
            <div>Contacts</div>
          </div>
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
