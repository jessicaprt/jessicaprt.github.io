import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import axios from 'axios';

import { PlainHeader } from './PlainHeader';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects : [],
            active_tags : [],
            removing: ''
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
            console.log("not found.. adding");
            tags.push(tag);
            this.setState({active_tags : tags});
        } 
    }

    handleClick(tag) {
        console.log("trying to remove: " + tag.eventKey);
    }

    renderActiveTags(active_tags) {
        return (
            (active_tags.length != 0) ? 
                <ul className="activeFilters filterInput">
                    { active_tags.map((tag) =>
                        <li>
                            { tag }
                            <Button 
                                onClick={ this.handleClick.bind(this) }
                                key={ tag }>x</Button></li>) }
            </ul> : null
        );
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
                        eventKey={ tag }
                        onSelect={ this.handleSelect.bind(this) }>{ tag }</MenuItem> )}         
            </div>);
    }

    render() {
        return(
        <div className="ProjectsPage">
            <PlainHeader />

            { (this.state.projects.length != 0) ?
            <Grid>
              <div>
                    <h1 className="projectsPageTitle Oswald-font purpleFont">Projects</h1>
                    
                    <DropdownButton
                        className="filterInput"
                        bsStyle='default'
                        title="select a filter"
                        id="dropdown-basic">
                        
                        { this.fetchTags(this.state.projects) }
                    </DropdownButton>

                    { this.renderActiveTags(this.state.active_tags) }

                  
              </div>
            </Grid> : null }
        </div>);
    }
}