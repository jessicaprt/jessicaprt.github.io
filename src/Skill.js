import React, { Component } from 'react';

export class Skill extends Component {

    renderGraph(skills, name) {
        return (skills.map((skill) =>
            <li className="skillItem" key={ name + "-" + skill }>{ skill }</li> ));
    }

    render() {
        return (
            <div className="skillContent">
                <div className="skillWrapper">
                    <img src={this.props.imgUrl} alt={ this.props.name } className="skillImage" /></div>
                <h5 className="skillName Oswald-font">{ this.props.name }</h5>
                <div className="skillDescription">
                    { this.props.description }
                    <ul className="skillList">
                        { this.renderGraph(this.props.skills, this.props.name) }</ul>
                </div>
            </div>
        );
    }
}