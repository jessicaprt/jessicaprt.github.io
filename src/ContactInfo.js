import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class ContactInfo extends Component {
    renderDate() {
        var d = new Date();
        return (<p>&copy; Jessica Prieto - { d.getFullYear() }</p>);
    }

    render() {
        return (
            <div className="ContactInfo" id="contact">
                <Grid>
                    <ul>
                        <li className="contactIcons">
                            <a href="https://www.linkedin.com/in/jessica-prieto-316918a6/" 
                            target="_blank"
                            rel="noopener noreferrer"><img src="./assets/icons/In-White-28px-R.png" className="contactIconsImg"/></a></li>
                        
                        <li className="contactIcons">
                            <a href="https://github.com/jessicaprt" 
                            target="_blank"
                            rel="noopener noreferrer"><img src="./assets/icons/github-6-xxl.png" className="contactIconsImg"/></a></li>
                        
                        <li className="contactIcons">
                            <a href="mailto:jessica@prieto.ca" 
                            target="_blank"
                            rel="noopener noreferrer"><img src="./assets/icons/ic_mail_outline.png" className="contactIconsImg"/></a></li></ul>
                    <p><strong>email: </strong>jessica@prieto.ca</p>
                    <div className="whiteDivider"></div>
                    { this.renderDate() }
                </Grid>
            </div>
        );
    }
}