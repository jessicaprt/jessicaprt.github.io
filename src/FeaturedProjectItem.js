import React, { Component } from 'react';

export class FeaturedProjectItem extends Component {
    render() {
        return(
            <div className="fproject-item">
                <div className="fproject-image-wrapper">
                    <img 
                        src={ this.props.imgUrl } 
                        alt={ this.props.title }
                        className="fproject-images" /></div>
                <h5 className="fproject-item-title">{ this.props.title }</h5>
            </div>
        );
    }
}