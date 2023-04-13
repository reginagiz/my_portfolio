import React from "react";
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.profile_container}>
            Primary button: indicate the main action, one primary button at most in one section.
            Default button: indicate a series of actions without priority.
            Dashed button: used for adding action commonly.
            Text button: used for the most secondary action.
            Link button: used for external links.
        </div>

    )
}

export default Profile;