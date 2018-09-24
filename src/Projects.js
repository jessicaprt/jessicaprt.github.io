import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col';
import { ProjectItem } from './ProjectItem.js'

export class Projects extends Component {
    render() {
        return (
            <div className="projects" id="projects">
                <Grid>
                    <div className="projectsContent">
                        <h1 className="Sofia-title center" >- Projects -</h1>
                        <Row>
                            <Col sm={4}><ProjectItem 
                                imgUrl={ this.props.projects.A.imgUrl }
                                title={ this.props.projects.A.name } /></Col>

                            <Col sm={4}><ProjectItem 
                                imgUrl={ this.props.projects.B.imgUrl }
                                title={ this.props.projects.B.name } /></Col>

                            <Col sm={4}><ProjectItem 
                                imgUrl={ this.props.projects.C.imgUrl }
                                title={ this.props.projects.C.name } /></Col>
                        </Row>
                        
                        <Button className="projectButton">- View more projects -</Button>
                    </div>              
                </Grid>
            </div>
        );
    }
}