import React, { Component } from 'react';
import { Header }           from './Header.js';
import { AboutMe }          from './AboutMe.js';
import { SkillHighlights }  from './SkillHighlights.js';
import { FeaturedProjects } from './FeaturedProjects.js';
import { FeaturedBlog }     from './FeaturedBlog.js';
import { Instagram }        from './Instagram.js'
import { ContactInfo }      from './ContactInfo.js'; 


import { LandingPage } from './LandingPage';
import { AllBlogs } from './AllBlogs';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        blogs : []
    }
  }
  
  render() {
    return (
      <BrowserRouter baseName={process.env.PUBLIC_URL}>
        <div>
          <Route exact={true} 
            path='/'
            render={() => (
              <div className="App">
                <LandingPage />
              </div>
          )}/>

          <Route exact={true} 
            path='/blogs/all_blogs'
            render={() => (
              <div className="App">
                <AllBlogs />
              </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
