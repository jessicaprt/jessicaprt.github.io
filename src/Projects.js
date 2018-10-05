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
        var after = []
        tags = this.state.active_tags;

        for (var i=0; i<tags.length; i++){
            console.log(i);
            console.log(tags[i]);
            if (tags[i] !== tagToRemove)
                after.push(tags[i]);
            else 
                console.log("removing: " + tags[i]);
        }

        this.setState({active_tags : after});
    }

    renderActiveTags(active_tags) {
        return (
            (active_tags.length !== 0) ? 
                <ul className="activeFilters filterInput">
                    { active_tags.map((tag) =>
                        <li
                            key={tag}>{ tag }
                            <button 
                                text={tag + " x"}
                                onClick={() => this.handleClick(tag)}>x</button></li>) }
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