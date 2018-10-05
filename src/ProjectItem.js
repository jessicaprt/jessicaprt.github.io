import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class ProjectItem extends Component {
    render() {
        return (
            <Grid className="mProjectsItem">
                <Row>
                    <Col sm={4}>
                        <div className="mProjectWrapper">
                            <img className="mProjectImage" src={ "./assets/" + this.props.image } alt={ this.props.image }/></div></Col>

                    <Col sm={8} className="mProjectContent">
                        <h1 className="mProjectTitle Oswald-font purpleFont">{ this.props.title }</h1>
                        <p>{ this.props.description }</p>
                        <div className="mProjectsTags"><p>tags: <em>{ this.props.tags.join(", ") }</em></p></div></Col>
                </Row>
            </Grid>
        );
    }
}