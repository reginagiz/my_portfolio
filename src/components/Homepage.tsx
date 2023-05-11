import React from "react"
import s from "./Homepage.module.css"
import CowIcon from "../images/CowIcon"

function Homepage() {
  return (
    <div className={s.homepage}>
      <div className={s.homepage_container}>
        <div className={s.photo_container}>
          <img src={require("../images/my_photo.png")} alt="my_photo"></img>
        </div>
        <div className={s.text_container}>
          <h1 className={s.title}>Hi, my name is Regina</h1>
          <h2 className={s.foreword}>
            I am a frontend developer. Glad to see you here. I wish you a good
            day.
          </h2>
        </div>
      </div>
      <div className={s.wave}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z"></path>
        </svg>
      </div>
      <div className={s.about_container}>
        <div className={s.about_me}>
          <div className={s.moon_rover_icon}></div>
          <h1>I write code, learn quickly, interested in new things.</h1>
          passionate about creating beautiful and intuitive user interfaces that
          enhance the user experience. I have a strong foundation in HTML, CSS,
          and JavaScript and continually strive to stay up-to-date with the
          latest technologies and best practices in the field. I am
          detail-oriented and committed to writing clean, well-structured code.
        </div>
        <h1>Check out my latest thing!</h1>
        <div className={s.project_container}>
          <div className={s.book}></div>
          <div className={s.project_text_container}>
            <h1>"Books store" </h1>TypeScript web application development with
            React, NextJS, Apollo Client, NodeJS based CMS platform - KeystoneJS
          </div>
        </div>
        <CowIcon />
        <button
          onClick={() => (window.location.href = "mailto:gizregiz@gmail.com")}
        >
          <h1 className={s.mail_button}>any questions?</h1>
        </button>
      </div>
    </div>
  )
}

export default Homepage
