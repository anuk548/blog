import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>Blog i is a free blogging app With simple and practical design. 
             You can manage multiple accounts and blogs. 
             You can easily create and publish their own blogs.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Facebook: Anuk indeepa</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Country: Sri lanka</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer