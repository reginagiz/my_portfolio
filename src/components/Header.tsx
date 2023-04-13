import React from "react";
import s from './Header.module.css'
import GirlIcon from "../images/GirlIcon";
import ContactsIcon from "../images/ContactsIcon";
import PortfolioIcon from "../images/PortfolioIcon";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.icons}>
        <div className={s.icon_container}>
          <div className={s.img_container}>
            <GirlIcon />
          </div>
          <div>About me</div>
        </div>
        <div className={s.icon_container}>
          <div className={s.img_container}>
            <PortfolioIcon />
          </div>
          <div>Portfolio</div>
        </div>
        <div className={s.icon_container}>
          <div className={s.img_container}>
            <ContactsIcon />
          </div>
          <div>Contacts</div>
        </div>
      </div>
    </div>

  )
}

export default Header;