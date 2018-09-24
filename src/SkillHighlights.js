import React, { Component } from 'react';
import { Skill } from './Skill.js';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class SkillHighlights extends Component {
    render() {
        return(
            <div className="Highlights purpleBackground">
                <Grid className="SkillHighlights">
                    <Row>
                        <Col sm={4} className="skill"><div className="skillBorder">
                            <Skill skill={ this.props.skill.A }/></div></Col>
                        <Col sm={4} className="skill"><div className="skillBorder">
                            <Skill skill={ this.props.skill.B }/></div></Col>
                        <Col sm={4} className="skill"><div className="skillBorder">
                            <Skill skill={ this.props.skill.C }/></div></Col>   
                    </Row>
                </Grid>
            </div>
        );
    }
}