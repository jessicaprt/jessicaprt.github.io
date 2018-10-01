import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class BlogHeader extends Component {
    render() {
        return (
            <Grid className="blogPageHeader">
                <div className="blogPageImageWrapper">
                    <div className="blogPageImage">
                        <img 
                            src={ "./images/" + this.props.imgUrl }
                            alt={ this.props.imgUrl } />
                    </div></div></Grid>);
    }
}