import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe" id="about-me">
                <Grid className="description">
                    <Row>
                        <Col sm={4}>
                            <div className="AboutWrapper">
                                <div className="AboutImage"></div></div></Col>
                        
                        <Col sm={8}>
                            <div className="AboutDescription">
                                <h1 className="Oswald-font purpleFont">About Me</h1>
                                <p>{this.props.text}</p></div></Col>
                        
                    </Row>
                </Grid>
            </div>
        );
    }
}