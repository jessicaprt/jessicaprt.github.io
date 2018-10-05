import React, { Component } from 'react';

export class FeaturedProjectItem extends Component {
    render() {
        return(
            <div className="projectItem">
                <div className="imageWrapper">
                    <img 
                        src={ this.props.imgUrl } 
                        alt={ this.props.title }
                        className="projectImages" /></div>
                <h5 className="projectItemTitle Oswald-font">{ this.props.title }</h5>
            </div>
        );
    }
}