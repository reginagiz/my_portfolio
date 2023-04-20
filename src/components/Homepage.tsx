import React from "react"
import s from "./Homepage.module.css"

function Homepage() {
  return (
    <div className={s.homepage}>
      <div className={s.homepage_container}>
        <div className={s.photo_container}>
          <img src={require("../images/my_photo.png")}></img>
        </div>
        <div className={s.text_container}>
          <h1 className={s.title}>Hi, my name is Regina</h1>
          <h2 className={s.foreword}>
            I am a front-end developer who loves bouilding user-friendly
            websites. I am a front-end developer who loves bouilding
            user-friendly websitesI am a front-end developer who loves bouilding
            user-friendly websites
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Homepage
