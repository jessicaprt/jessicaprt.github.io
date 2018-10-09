import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import axios from 'axios';

import { ProjectItem } from './ProjectItem';
import { PlainHeader } from './PlainHeader';
import { Footer } from './Footer';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects : [],
            active_tags : [],
        }
    }    

    componentDidMount() {
        axios.get('./projects.json')
            .then (response => {
                const projects = response.data.projects;
                this.setState({ projects })
            });
    }

    handleSelect(tag) {
        var tags = [];
        tags = this.state.active_tags;

        if (!tags.includes(tag)) {
            tags.push(tag);
            this.setState({active_tags : tags});
        } 
    }

    handleClick(tagToRemove) {
        var tags = [];
        tags = this.state.active_tags;

        for (var i=0; i<tags.length; i++){
            if (tags[i] === tagToRemove)
                tags.splice(i,1);
            else 
                console.log("removing: " + tags[i]);
        }

        this.setState({active_tags : tags});
    }

    renderActiveTags(active_tags) {
        return (
            (active_tags.length !== 0) ? 
                <ul className="activeFilters filterInput">
                    { active_tags.map((tag) =>
                        <li className="activeTag Oswald-font"
                            key={tag}>{ tag }
                            <button 
                                className="removeTagButton"
                                text={tag + " x"}
                                onClick={() => this.handleClick(tag)}>x</button></li>) }
            </ul> : null
        );
    }

    renderFilteredProjects(projects) {
        var filteredProjects = this.getFilteredProjects(projects);
        
        return ( 
            <div>
                { (this.state.active_tags.length !== 0) ?
                    this.renderProjects(filteredProjects) :
                    this.renderProjects(projects) } </div>);      
    }

    renderProjects(projects) {
        console.log("rendering..");
        console.log(projects);

        return(
            <div className="filteredProjects">
                { projects.map((proj) =>
                    <ProjectItem
                        key={ proj.name }
                        title={ proj.name }
                        description={ proj.description }
                        tags={ proj.tags }
                        image={ proj.image_link }/>)}
            </div>
        );
    }

    getFilteredProjects(projects) {
        var activeTags = this.state.active_tags;
        var filteredProjectsSet = new Set([]);
        var filteredProjects = [];

        for(var i=0; i<projects.length; i++) {
            var currentTags = projects[i].tags;
            for(var k=0; k<currentTags.length; k++)
                if ( activeTags.includes(currentTags[k]) )
                filteredProjectsSet.add(projects[i]);
        }

        filteredProjects = Array.from(filteredProjectsSet);

        return filteredProjects;
    }


    fetchTags(projects) {
        var tagsSet = new Set([]);
        var allTags = [];

        for (var i=0; i < projects.length; i++) 
            for (var k=0; k < projects[i].tags.length; k++) 
                tagsSet.add(projects[i].tags[k]);

        allTags = Array.from(tagsSet);

        return (
            <div>
                { allTags.map((tag) =>  
                    <MenuItem
                        className="filterMenuItems"
                        eventKey={ tag }
                        key={ tag }
                        onSelect={ this.handleSelect.bind(this) }>{ tag }</MenuItem> )}         
            </div>);
    }

    render() {
        return(
        <div className="ProjectsPage">
            <PlainHeader />

            { (this.state.projects.length !== 0) ?
            <Grid>
              <div>
                    <h1 className="projectsPageTitle Oswald-font purpleFont">Projects</h1>
                    
                    <DropdownButton
                        className="filterInput filterDropdown"
                        bsStyle='default'
                        title="select a filter"
                        id="dropdown-basic">
                        
                        { this.fetchTags(this.state.projects) }
                    </DropdownButton>

                    { this.renderActiveTags(this.state.active_tags) }

                    { this.renderFilteredProjects(this.state.projects) }

                  
              </div>
            </Grid> : null }
            <Footer/>  
        </div>);
    }
}