import React, { Component } from 'react';

const SkillItemRate = ({ size }) => (
    <div style={{
        height: '5px',
        backgroundColor: 'rgba(126, 106, 140, 0.7)',
        width: size,
        color: 'white'
    }}></div>
);

export class Skill extends Component {

    renderGraph(skills, name) {
        return (skills.map((skill) =>
        <tr key={ name + "-" + skill[0] }>
            <td className="skillItemName skillComponent"><li className="skillItem">{ skill[0] }</li></td>
            <td className="skillItemRate skillComponent"><SkillItemRate size={ skill[1] } /></td>
        </tr> ));
    }

    render() {
        return (
            <div className="skillContent">
                <div className="skillWrapper">
                    <img src={this.props.imgUrl} alt={ this.props.name } className="skillImage" /></div>
                <h5 className="skillName Oswald-font">{ this.props.name }</h5>
                <div className="skillDescription">
                    { this.props.description }
                    <table className="skillList">
                        <tbody>{ this.renderGraph(this.props.skills, this.props.name) }</tbody>
                    </table>   
                </div>
            </div>
        );
    }
}