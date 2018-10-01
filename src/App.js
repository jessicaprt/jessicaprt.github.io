import React, { Component } from 'react';

import { LandingPage } from './LandingPage';
import { BlogPage } from './BlogPage';
import { AllBlogs } from './AllBlogs';

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
          .then (response => {
              const blogs = response.data.blogs;
              this.setState({ blogs })
          });
  }
  
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact={true} path='/' render={() => (
          <div className="App">
            <LandingPage />
          </div>
        )}/>

        <Route exact={true} path='/blogs/all_blogs' render={() => (
          <div className="App">
            <AllBlogs />
          </div>
        )}/>

        { this.state.blogs.map((blog) => 
          <Route exact={true} path={'/blogs/' + blog.url} render={() => (
            <div className="App">
              <BlogPage blog={ blog }/>
            </div> )}/>
          ) }

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
