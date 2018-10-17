import React, { Component } from 'react';

export class Skill extends Component {

    renderGraph(skills, name) {
        return (skills.map((skill) =>
            <li className="skill-item" key={ name + "-" + skill }>{ skill }</li> ));
    }

    render() {
        return (
            <div className="skill-content">
                <div className="skill-wrapper">
                    <img src={this.props.imgUrl} alt={ this.props.name } 
                        className="skill-image" /></div>
                <h5 className="skill-name">{ this.props.name }</h5>
                <div className="skill-description">
                    { this.props.description }
                    <ul className="skill-list">
                        { this.renderGraph(this.props.skills, this.props.name) }</ul>
                </div>
            </div>
        );
    }
}