// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'about-bg-dark'
        : 'about-bg-light'

      const notFoundHeadingTextClassName = isDarkTheme
        ? 'not-found'
        : 'not-found'

      const notFoundContentTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'

      return (
        <div className={`about-app-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="about-pg">
            <div className="about-pg">
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className={`about-heading ${notFoundHeadingTextClassName}`}>
                Lost Your Way?
              </h1>
              <p className={`about-heading ${notFoundContentTextClassName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
