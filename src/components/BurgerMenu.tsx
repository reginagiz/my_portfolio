import s from "./BurgerMenu.module.css"
import GirlIcon from "../images/GirlIcon"
import ContactsIcon from "../images/ContactsIcon"
import PortfolioIcon from "../images/PortfolioIcon"
import { useNavigate } from "react-router-dom"

function BurgerMenu(props: any) {
  const { show, closeModal } = props
  const navigate = useNavigate()
  const navigateAbout = () => {
    closeModal()
    navigate("/about")
  }

  return (
    <>
      <div className={show ? s.burger_menu : s.hide_burger_menu}>
        <div className={s.burger_menu_container}>
          <button onClick={closeModal} className={s.close_menu_button}>
            (Close this thing)
          </button>
          <div className={s.buttons_burger_container}>
            <button
              className={s.burger_menu_button}
              onClick={() => navigateAbout()}
            >
              <GirlIcon />
              <div>About me</div>
            </button>
            <button className={s.burger_menu_button}>
              <PortfolioIcon />
              <div>Portfolio</div>
            </button>
            <button className={s.burger_menu_button}>
              <ContactsIcon />
              <div>Contacts</div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
