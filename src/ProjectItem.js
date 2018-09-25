import React, { Component } from 'react';

export class ProjectItem extends Component {
    render() {
        return(
            <div className="projectItem">
                <div class="imageWrapper">
                    <img src={ this.props.imgUrl } className="projectImages" /></div>
                <h5 className="projectTitle Oswald-font">{ this.props.title }</h5>
            </div>
        );
    }
}