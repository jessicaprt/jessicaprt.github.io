import React, { Component } from 'react';

import { LandingPage } from './LandingPage';
import { AllBlogs } from './AllBlogs';
import { BlogGenerator } from './BlogGenerator';
import { BlogPage } from './BlogPage';
import { Projects } from './Projects';

import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        blogs : []
    }
  }
  
  componentDidMount() {
    axios.get('./blogs.json')
      .then ((response) => {
          const blogs = response.data.blogs;
          this.setState({ blogs }) })

      .catch((error) => {
        if (error.response) {
          console.log("blogs.json shouldn't load here");
        }
      } );
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
            path='/projects/all_projects' 
            baseName='/projects'
            render={() => (
              <div className="App">
                <Projects />
              </div>
          )}/>

          <Route exact={true} 
            path='/blogs/all_blogs'
            render={() => (
              <div className="App">
                <AllBlogs />
              </div>
          )}/>

          { this.state.blogs.map((blog) => 
            <Route exact={true} 
              key={ blog.url }
              path={ '/blogs/' + blog.url } 
              baseName={'/personal-website-react/blogs' + blog.url}
              render={() => (
                <div className="App">
                  <BlogPage blog={ blog }/>
                </div> )}/>
            ) }

            <Route exact={true} 
              path='/blogs/new_blog'
              render={() => (
                <div className="App">
                  <BlogGenerator />
                </div>
            )}/>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
