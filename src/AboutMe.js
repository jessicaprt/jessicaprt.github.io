import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import axios from 'axios';

export class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutMe : ""
        }
    }
    componentDidMount() {
        axios.get('./contents.json')
            .then (response => {
                const aboutMe = response.data.contents.aboutMe;
                this.setState({ aboutMe })
            });
    }

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
                                <p>{this.state.aboutMe}</p></div></Col>
                        
                    </Row>
                </Grid>
            </div>
        );
    }
}