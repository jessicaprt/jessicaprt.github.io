import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { FeaturedProjectItem } from './FeaturedProjectItem';

export class FeaturedProjects extends Component {

    renderProjects() {
        return(
            <Row className="projectsContainer">
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
            <div className="projects champagneBackground" id="projects">
                <Grid>
                    <div className="projectsContent">
                        <Row className="projectsTitleContainer">
                            <div className="projectsTitleInnerContainer">                            
                                <div className="projectsLine"></div>
                                <Col sm={4} className="projectsTitleWrapper">
                                    <div className="projectsTitle Oswald-font">Projects</div></Col></div>
                        </Row>
                        
                        { this.renderProjects() }
                        
                        <Row><Col sm={4} smOffset={4}>
                        <div className="mainButtonWrapper">
                            <a href="/projects" className="aButton">
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