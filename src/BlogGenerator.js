import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

// import axios from 'axios';

export class BlogGenerator extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '',
            url: '',
            image: '',
            tags: [],
            body: []
        };
    }

    handleTitleChange(e) {
        this.setState({ title : e.target.value });
    }

    handleUrlChange(e) {
        this.setState({ url : e.target.value });
    }

    handleBodyChange(e) {
        var body = [];
        body = e.target.value.split("\n");
        
        this.setState({ body });
    }

    handleImageChange(e) {
        this.setState({ image : e.target.value });
        this.setState({ imageExists : true });
    }

    validateUrl() {
        if (/\s/.test(this.state.url))
            return 'error';
        else if (this.state.url === '')
            return 'warning';
        else
            return 'success';
    }

    validateBlank(inputItem) {
        if(inputItem.length === 0)
            return 'warning';
        else return 'success';
    }

    validateImage() {
        if (this.state.imageExists)
            return 'success';
        else if (this.state.image === '') return 'warning';
        else return 'error';
    }

    renderImageError(e) {
        this.setState({ imageExists : false });
        return(<div>error</div>);
    }

    checkAllInputs() {
        return (
            (this.validateBlank(this.state.title) !== 'warning') &&
            (this.validateBlank(this.state.body) !== 'warning') &&
            (this.validateImage() !== 'error') && 
            (this.validateImage() !== 'warning') &&
            (this.validateUrl() !== 'error') && 
            (this.validateUrl() !== 'warning'));
        }

    makeBlogPost(e) {
        if (this.checkAllInputs()) {
        } else {
            alert("invalid input! check all input fields");
        }
    }

    render() {
        return(
            <div>{ (window.location.href === "http://localhost:3000/blogs/new_blog") ?
                <Grid className="blogGenerator">
                    <h1 className="Oswald-font purpleFont">Blog Generator</h1>  
                    <form>
                        <FormGroup controlId="formBasicText"
                            validationState={this.validateBlank(this.state.title)}>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type="text"
                                value={ this.state.value }
                                placeholder="Title"
                                onChange={ this.handleTitleChange.bind(this) } />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup controlId="formBasicText" 
                            validationState={this.validateUrl()}>
                            <ControlLabel>URL</ControlLabel>
                            <FormControl
                                type="text"
                                value={ this.state.value }
                                placeholder="Url"
                                onChange={ this.handleUrlChange.bind(this) } />
                            <FormControl.Feedback />
                            <HelpBlock>must not have any spaces</HelpBlock>
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea"
                            validationState={ this.validateBlank(this.state.body) }>
                            <ControlLabel>Body</ControlLabel>
                            <FormControl 
                                componentClass="textarea" 
                                placeholder="enter blog here" 
                                onChange={ this.handleBodyChange.bind(this) }/>
                        </FormGroup>

                        <FormGroup controlId="formBasicText"
                            validationState={this.validateImage()}>
                            <ControlLabel>Image URL</ControlLabel>
                            <FormControl
                                type="text"
                                value={ this.state.value }
                                placeholder="Image Url"
                                onChange={ this.handleImageChange.bind(this) } />
                            <FormControl.Feedback />
                            <HelpBlock>enter filename that exists in folder 'blogs/images/'</HelpBlock>
                        </FormGroup>

                        <Row>
                            { (this.state.imageExists) ? 
                                <Col sm={6} smOffset={3}>
                                    <img src={ "images/" + this.state.image } 
                                        className="bgImage"
                                        alt={ this.state.image }
                                        onError={ this.renderImageError.bind(this) } /></Col> : 
                                    
                                        (this.state.image !==  '') ? <p>image not found</p> : null }
                        </Row>
                        <Row className="bgButton" onClick={ this.makeBlogPost.bind(this) }><Button>Create Blog Post</Button></Row>
                    </form>
                </Grid> : 
                <div>No access to this page</div> }</div>
        );
    }
}