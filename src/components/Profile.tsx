import React from "react"
import s from "./Profile.module.css"
import CowIcon from "../images/CowIcon"

function Profile() {
  return (
    <div className={s.profile}>
      <div className={s.profile_container}>
        <div className={s.text_container}>
          <ul>
            <h1 className={s.title}>my skills</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>JavaScript Libraries (React, Redux, Apollo Client).</li>
            <li>Experience with the Git version control system.</li>
            <li>Work with the platform Node.js.</li>
            <li>Work with React frameworks (Next.js, Ant Design)</li>
            <li>Work with the NodeJS based CMS platform - KeystoneJS.</li>
            <li>Work with database management system MongoDB.</li>
            <li>Work with cloud platform Heroku.</li>
            <li>Testing & Debugging.</li>
            <CowIcon />
          </ul>
        </div>
        <div className={s.astronaut_icon}></div>
      </div>
    </div>
  )
}

export default Profile
