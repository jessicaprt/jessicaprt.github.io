import React, { Component } from 'react';

export class ProjectItem extends Component {
    render() {
        return(
            <div className="projectItem">
                <div className="imageWrapper"> 
                    <img src={ this.props.imgUrl } className="projectImages" />
                </div>
                <h5 className="projectTitle">{ this.props.title }</h5>
            </div>
        );
    }
}