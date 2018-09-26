import React, { Component } from 'react';
import { Header }           from './Header.js';
import { AboutMe }          from './AboutMe.js';
import { SkillHighlights }  from './SkillHighlights.js';
import { Projects }         from './Projects.js';
import { FeaturedBlog }     from './FeaturedBlog.js';
import { Instagram }        from './Instagram.js'
import { ContactInfo }      from './ContactInfo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <SkillHighlights />
        <Projects />
        <FeaturedBlog />
        <Instagram />
        <ContactInfo />
      </div>
    );
  }
}

export default App;
