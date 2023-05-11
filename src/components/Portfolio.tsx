import s from "./Portfolio.module.css"

function Portfolio() {
  return (
    <div className={s.portfolio}>
      <div className={s.title_container}>
        <h1 className={s.title}>my projects</h1>
        <div>Here's what I work on and pour myself into, creatively.</div>
        <div>Professionally. Intentionally. Indubitably.</div>
      </div>
      <div className={s.wave}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z"></path>
        </svg>
      </div>
      <div className={s.portfolio_container}>
        <div className={s.project_container}>
          <div className={s.popcorn}></div>
          <div className={s.text_container}>
            <h1>"Movies library"</h1>
            <div>
              Comprehensive JS web application development with React, Redux,
              Node.js, MongoDB, with uploading images to Cloudinary. Deployed in
              Heroku
            </div>
          </div>
        </div>
        <div className={s.project_container}>
          <div className={s.sneakers}></div>
          <div className={s.text_container}>
            <h1>"Sneakers store"</h1> TypeScript web application development
            with React, Redux
          </div>
        </div>
        <div className={s.project_container}>
          <div className={s.book}></div>
          <div className={s.text_container}>
            <h1>"Books store" </h1>TypeScript web application development with
            React, NextJS, Apollo Client, NodeJS based CMS platform - KeystoneJS
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
