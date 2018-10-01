import React, { Component } from 'react';
import { Header }           from './Header.js';
import { AboutMe }          from './AboutMe.js';
import { SkillHighlights }  from './SkillHighlights.js';
import { FeaturedProjects } from './FeaturedProjects.js';
import { FeaturedBlog }     from './FeaturedBlog.js';
import { Instagram }        from './Instagram.js'
import { ContactInfo }      from './ContactInfo.js'; 

export class LandingPage extends Component {
    render() {
        return (
            <div className="App">
              <Header />
              <AboutMe />
              <SkillHighlights />
              <FeaturedProjects />
              <FeaturedBlog />
              <Instagram />
              <ContactInfo />
            </div>
          );
    }
}