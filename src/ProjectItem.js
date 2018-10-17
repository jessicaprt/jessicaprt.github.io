import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class ProjectItem extends Component {
    render() {
        return (
            <Grid className="project-page-item">
                <Row>
                    <Col sm={4}>
                        <div className="project-page-wrapper">
                            <img className="project-page-image" src={ "./assets/" + this.props.image } alt={ this.props.image }/></div></Col>

                    <Col sm={8} className="project-page-content">
                        <h1 className="project-page-item-title">{ this.props.title }</h1>
                        <p>{ this.props.description }</p>
                        <div className="project-page-item-tags"><p>tags: <em>{ this.props.tags.join(", ") }</em></p></div></Col>
                </Row>
            </Grid>
        );
    }
}