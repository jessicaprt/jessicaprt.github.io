import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = [
      ['About me', 'about-me'], 
      ['Projects', 'projects'], 
      ['Blog', 'blog'],
      ['Instagram', 'instagram'] ];
    const navLinks = pages.map(page => {
      return (
        <div key={page[1]}>
          <a href={'#' + page[1]} className="navItems">
            {page[0]}
          </a>
        </div>
      )
    });

    return <nav className="navBlock nav">{navLinks}</nav>;
  }
}