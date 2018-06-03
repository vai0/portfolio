import React from 'react';
import Link from 'gatsby-link';

class Navbar extends React.PureComponent {
  componentDidMount() {
    this.refs.navbar.addEventListener('click', e => {
      if (e.target.innerText === 'Projects') {
        document
          .getElementById('projects')
          .scrollIntoView({ behavior: 'smooth' });
      } else if (e.target.innerText === 'Contact') {
        document
          .getElementById('contact')
          .scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar" ref="navbar">
          <Link to="/">Home</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#contact">Contact</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
