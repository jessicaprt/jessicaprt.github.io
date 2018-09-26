import React, { Component } from 'react';
import { Skill } from './Skill.js';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import axios from 'axios';

export class SkillHighlights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillsHighlight : []
        }
    }   
    
    componentDidMount() {
        axios.get('./contents.json')
        .then (response => {
            const skillsHighlight = response.data.contents.skills_highlight;
            this.setState({ skillsHighlight })
        });
    }

    renderSkillHighlights() {
        if (this.state.skillsHighlight.length !== 0) {
            return(
                <Row>
                    <Col sm={4} className="skill"><div className="skillBorder">
                            <Skill 
                                name={ this.state.skillsHighlight.A.name }
                                imgUrl={ this.state.skillsHighlight.A.imgUrl }
                                description={ this.state.skillsHighlight.A.description }/></div></Col>
                    <Col sm={4} className="skill"><div className="skillBorder">
                            <Skill 
                                name={ this.state.skillsHighlight.B.name }
                                imgUrl={ this.state.skillsHighlight.B.imgUrl }
                                description={ this.state.skillsHighlight.B.description }/></div></Col>
                    <Col sm={4} className="skill"><div className="skillBorder">
                            <Skill 
                                name={ this.state.skillsHighlight.C.name }
                                imgUrl={ this.state.skillsHighlight.C.imgUrl }
                                description={ this.state.skillsHighlight.C.description }/></div></Col>
                </Row>);
        }
    }
    render() {
        return(
            <div className="Highlights purpleBackground">
                <Grid className="SkillHighlights">
                    { this.renderSkillHighlights() }
                </Grid>
            </div>
        );
    }
}