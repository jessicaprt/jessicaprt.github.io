import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = [
      ['About me', 'about-me'], 
      ['Projects', 'projects'], 
      ['Daily', 'daily'] ];
    const navLinks = pages.map(page => {
      return (
        <a href={'#' + page[1]} className="nav-items">
          {page[0]}
        </a>
      )
    });

    return <nav className="nav">{navLinks}</nav>;
  }
}