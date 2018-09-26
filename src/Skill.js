import React, { Component } from 'react';

export class Skill extends Component {
    render() {
        return (
            <div className="skillContent">
                <div className="skillWrapper">
                    <img src={this.props.imgUrl} alt={ this.props.name } className="skillImage" /></div>
                <h5 className="skillName Oswald-font">{ this.props.name }</h5>
                <div className="skillDescription">{ this.props.description }</div>
            </div>
        );
    }
}