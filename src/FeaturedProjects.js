import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { FeaturedProjectItem } from './FeaturedProjectItem';

export class FeaturedProjects extends Component {

    renderProjects() {
        return(
            <Row className="fprojects-container">
                <Col sm={4}><FeaturedProjectItem 
                    imgUrl={ this.props.projects.A.imgUrl }
                    title={ this.props.projects.A.name } /></Col>
                <Col sm={4}><FeaturedProjectItem 
                    imgUrl={ this.props.projects.B.imgUrl }
                    title={ this.props.projects.B.name } /></Col>
                <Col sm={4}><FeaturedProjectItem 
                    imgUrl={ this.props.projects.C.imgUrl }
                    title={ this.props.projects.C.name } /></Col>
            </Row>
        );
    }

    render() {
        return (
            <div className="fprojects" id="projects">
                <Grid>
                    <div className="fprojects-content">
                        <Row className="fprojects-title-container">
                            <div className="fprojects-title-inner-container">                            
                                <div className="fprojects-line"></div>
                                <Col sm={4} className="fprojects-title-wrapper">
                                    <div className="fprojects-title">Projects</div></Col></div>
                        </Row>
                        
                        { this.renderProjects() }
                        
                        <Row><Col sm={4} smOffset={4}>
                        <div className="mainButtonWrapper">
                            <a href="/projects/all_projects" className="aButton">
                                <div className="mainButton Oswald-font">- View all Projects -</div></a></div>
                            </Col></Row>

                        <Row className="projectsFooter">
                            <div className="projectsLine projectsLineStatic"></div>
                        </Row>
                    </div>              
                </Grid>
            </div>
        );
    }
}