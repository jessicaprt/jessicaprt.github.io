import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export class BlogItem extends Component {
    
    trimContent(content) {
        var str = content.toString();
        var splitStr = str.split(" ");
        
        var i = 0;
        var buff = [];
        while (i < 50){
            buff[i] = splitStr[i];
            i++;
        }

        return buff.join(" ");
    }

    render() {
        return (
            <Grid className="BlogItem">
                <Row>
                    <Col sm={4}>
                        <div className="fBlogImageWrapper">
                        <img 
                            src={ "./blogs/images/" + this.props.image }
                            alt={ this.props.title } 
                            className="fBlogImages"/></div></Col>
                    <Col sm={8} className="fBlogContainer">
                        <p className="fBlogTitle Oswald-font">{ this.props.title }</p>
                        <p className="fBlogContent">
                            { this.trimContent(this.props.content) }
                            <a href={ this.props.blogUrl } className="purpleFont"> ... Read more</a></p></Col>
                </Row>
            </Grid>
        );
    }
}

