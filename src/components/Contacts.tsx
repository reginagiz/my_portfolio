import s from "./Contacts.module.css"
import EarthIcon from "../images/EarthIcon"
import MoonIcon from "../images/MoonIcon"
import SaturnIcon from "../images/SaturnIcon"
import MarsIcon from "../images/MarsIcon"

function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.contacts_container}>
        <a href="mailto:gizregiz@gmail.com" className={s.contacts_link}>
          <EarthIcon />
          <div>Mail</div>
        </a>
        <a
          href="https://www.linkedin.com/in/regina-giz/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.contacts_link}
        >
          <MarsIcon />
          <div>LinkedIn</div>
        </a>
        <a
          href="https://github.com/reginagiz"
          target="_blank"
          rel="noopener noreferrer"
          className={s.contacts_link}
        >
          <MoonIcon />
          <div>GitHub</div>
        </a>
        <a
          href="https://www.codewars.com/users/Regicha"
          target="_blank"
          rel="noopener noreferrer"
          className={s.contacts_link}
        >
          <SaturnIcon />
          <div>CodeWars</div>
        </a>
      </div>
    </div>
  )
}

export default Contacts
