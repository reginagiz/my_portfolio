import React from "react"
import s from "./Contacts.module.css"
import EarthIcon from "../images/EarthIcon"
import MoonIcon from "../images/MoonIcon"
import SaturnIcon from "../images/SaturnIcon"

function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.contacts_container}>
        <button className={s.contacts_button}>
          <EarthIcon />
          <div>Mail</div>
        </button>
        <button className={s.contacts_button}>
          <MoonIcon />
          <div>GitHub</div>
        </button>
        <button className={s.contacts_button}>
          <SaturnIcon />
          <div>CodeWars</div>
        </button>
      </div>
    </div>
  )
}

export default Contacts
