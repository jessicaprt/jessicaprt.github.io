import React, { Component } from 'react';
import { Header }           from './Header';
import { AboutMe }          from './AboutMe';
import { SkillHighlights }  from './SkillHighlights';
import { FeaturedProjects } from './FeaturedProjects';
import { FeaturedBlogs }    from './FeaturedBlogs';
import { Instagram }        from './Instagram'
import { ContactInfo }      from './ContactInfo'; 

import RingLoader from 'react-spinners/RingLoader';


import axios from 'axios';

export class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready : false,
            aboutMe : "",
            skills : [],
            projects : [],
            loading: true
        }
    }

    componentDidMount() {
        axios.get('./contents.json')
            .then (response => {
                const _aboutMe = response.data.contents.aboutMe;
                const _projects = response.data.contents.projects;
                const _skills = response.data.contents.skills_highlight;

                this.setState({ 
                    ready : true,
                    aboutMe : _aboutMe,
                    skills : _skills,
                    projects : _projects
                });
            });
    }
    render() {
        return (
            <div className="LandingPage">
                { (this.state.ready) ?
                    <div>
                        <div id="loadingIndicator" className="loadingIndicator">
                            <div className="ringLoader">
                                <RingLoader
                                    sizeUnit={"px"}
                                    size={150}
                                    color={'#fff'}
                                    loading={this.state.loading}
                                    /></div></div>
                        <Header />
                        <AboutMe content={ this.state.aboutMe }/>
                        <SkillHighlights skills={ this.state.skills }/>
                        <FeaturedProjects projects={ this.state.projects }/>
                        <FeaturedBlogs blogs={ this.state.blogs }/>
                        <Instagram />
                        <ContactInfo /> 
                    </div> : null }
            </div>
          );
    }
}