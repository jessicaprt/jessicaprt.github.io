import React, { Component } from 'react';

export class Skill extends Component {
    render() {
        return (
            <div className="skillContent">
                <h5 className="skillName">{ this.props.skill.name }</h5>
                <div className="skillWrapper">
                    <img src={this.props.skill.imgUrl} alt={ this.props.skill.name } className="skillImage" /></div>
                <div className="div-line"></div>
                <div className="skillDescription">{ this.props.skill.description }</div>
            </div>
        );
    }
}