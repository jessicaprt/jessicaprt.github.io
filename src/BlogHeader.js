import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class BlogHeader extends Component {
    render() {
        return (
            <Grid className="blog-page-header">
                <div className="blog-page-image-wrapper">
                    <div className="blog-page-image">
                        <img 
                            src={ "./images/" + this.props.imgUrl }
                            alt={ this.props.imgUrl } />
                    </div></div></Grid>);
    }
}