import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const self = this

    document.addEventListener('DOMContentLoaded', function(event) {
      self.refs.navbar.addEventListener('click', function(e) {
        if (e.target.innerText === 'Projects') {
          document
            .getElementById('projects')
            .scrollIntoView({ behavior: 'smooth' })
        } else if (e.target.innerText === 'Contact') {
          document
            .getElementById('contact')
            .scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar" ref="navbar">
          <a href="https://justinchi.me">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    )
  }
}

export default Navbar
