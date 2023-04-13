import React from "react";
import s from './Homepage.module.css'

function Homepage() {
    return (
        <div className={s.homepage}>
            <div className={s.photo_container}>
                <img src={require('../images/my_photo.png')}></img>
            </div>
            <div className={s.text_container}>
                <div className={s.title}>Hi, my name is Regina</div>
                <div className={s.foreword}>I am a front-end developer who loves bouilding user-friendly websites.
                    I am a front-end developer who loves bouilding user-friendly websitesI am a front-end developer who loves bouilding user-friendly websites</div>
            </div>
        </div>

    )
}

export default Homepage;