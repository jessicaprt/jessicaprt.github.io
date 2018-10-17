import React, { Component } from 'react';
import axios from 'axios';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { BlogItem } from './BlogItem.js';

export class FeaturedBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs : []
        }
    }

    componentDidMount() {
        axios.get('./blogs/blogs.json')
            .then (response => {
                const blogs = response.data.blogs;
                this.setState({ blogs })
            });
    }

    renderBlog(blogs) {
        if (blogs.length !== 0) {
            var blogItems = [];
            var i=0;
            var size = blogs.length;
            
            while (i<3) {
                var idx = size-1-i;
    
                if (blogs[idx] != null) {
                    blogItems[i] = {
                            'title' : blogs[idx].title,
                            'content' : blogs[idx].body,
                            'blogUrl' : blogs[idx].url,
                            'image' : blogs[idx].blog_image
                        };                
                } else {
                    blogItems[i] = {
                        'title' : "",
                        'content' : "",
                        'blogUrl' : "",
                        'image' : ""
                    };   
                } 
                i++;
            }

            return (
                <div>
                    { (blogItems[0].title !== "") ? <BlogItem 
                        title = { blogItems[0].title }
                        content = { blogItems[0].content }
                        blogUrl = { blogItems[0].blogUrl }
                        image = { blogItems[0].image }
                        route = "./blogs/" /> : null }
                    { (blogItems[1].title !== "") ? <BlogItem 
                        title = { blogItems[1].title }
                        content = { blogItems[1].content }
                        blogUrl = { blogItems[1].blogUrl }
                        image = { blogItems[1].image } 
                        route = "./blogs/"/> : null }
                    { (blogItems[2].title !== "") ? <BlogItem 
                        title = { blogItems[2].title }
                        content = { blogItems[2].content }
                        blogUrl = { blogItems[2].blogUrl }
                        image = { blogItems[2].image } 
                        route = "./blogs/"/> : null }
                </div>
            );
        }
    }

    render() {

        return(
            <div className="featured-blogs" id="blog">
                <Grid> <h1 className="fblog-main-title">Blog</h1>
                    { this.renderBlog(this.state.blogs) }

                    <Row><Col sm={4} smOffset={4}>
                    <div className="fblog-button">
                        <a href="/blogs/all_blogs" className="aButton">
                            <div className="mainButton Oswald-font">- View all Blogs -</div></a></div>
                        </Col></Row>
                
                </Grid></div>
        );
    }
}