import React, { Component } from 'react';

export class Skill extends Component {
    render() {
        return (
            <div className="skillContent">
                <div className="skillWrapper">
                    <img src={this.props.skill.imgUrl} alt={ this.props.skill.name } className="skillImage" /></div>
                <h5 className="skillName Oswald-font">{ this.props.skill.name }</h5>
                <div className="skillDescription">{ this.props.skill.description }</div>
            </div>
        );
    }
}