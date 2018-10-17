import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class AboutMe extends Component {
    render() {
        return (
            <div id="about-me">
                <Grid className="description">
                    <Row>
                        <Col sm={4}>
                            <div className="about-wrapper">
                                <div className="about-image"></div></div></Col>
                        
                        <Col sm={8}>
                            <div className="about-description">
                                <h1>About Me</h1>
                                <p>{this.props.content}</p></div></Col>
                        
                    </Row>
                </Grid>
            </div>
        );
    }
}