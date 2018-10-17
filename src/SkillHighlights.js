import React, { Component } from 'react';
import { Skill } from './Skill.js';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class SkillHighlights extends Component {

    renderSkillHighlights() {
        return(
            <Row>
                <Col sm={4} className="skill"><div className="skill-border">
                        <Skill 
                            name={ this.props.skills.A.name }
                            imgUrl={ this.props.skills.A.imgUrl }
                            description={ this.props.skills.A.description }
                            skills = { this.props.skills.A.skills }/></div></Col>
                <Col sm={4} className="skill"><div className="skill-border">
                        <Skill 
                            name={ this.props.skills.B.name }
                            imgUrl={ this.props.skills.B.imgUrl }
                            description={ this.props.skills.B.description }
                            skills = { this.props.skills.B.skills }/></div></Col>
                <Col sm={4} className="skill"><div className="skill-border">
                        <Skill 
                            name={ this.props.skills.C.name }
                            imgUrl={ this.props.skills.C.imgUrl }
                            description={ this.props.skills.C.description }
                            skills = { this.props.skills.C.skills }/></div></Col>
            </Row>);
    }
    
    render() {
        return(
            <div className="highlights">
                <Grid className="skill-highlights">
                    { this.renderSkillHighlights() }
                </Grid>
            </div>
        );
    }
}