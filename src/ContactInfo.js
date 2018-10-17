import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class ContactInfo extends Component {
    renderDate() {
        var d = new Date();
        return (<div className="contactContent">&copy; Jessica Prieto - { d.getFullYear() }</div>);
    }

    render() {
        return (
            <div className="footer" id="contact">
                <Grid>
                    <ul>
                        <li className="contact-icons">
                            <a href="https://www.linkedin.com/in/jessica-prieto-316918a6/" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img 
                                    src="./assets/icons/In-White-28px-R.png" 
                                    alt="linkedIn"
                                    className="contact-icons-img"/></a></li>
                        
                        <li className="contact-icons">
                            <a href="https://github.com/jessicaprt" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <img 
                                    src="./assets/icons/github-6-xxl.png" 
                                    alt="github"
                                    className="contact-icons-img"/></a></li>
                        
                        <li className="contact-icons">
                            <a href="mailto:jessica@prieto.ca" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <img 
                                src="./assets/icons/ic_mail_outline.png" 
                                alt="mail"
                                className="contact-icons-img"/></a></li></ul>
                                
                    <p><strong>email: </strong>jessica@prieto.ca</p>
                    <div className="white-divider"></div>
                    { this.renderDate() }
                </Grid>
            </div>
        );
    }
}