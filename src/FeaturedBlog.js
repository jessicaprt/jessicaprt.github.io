import React, { Component } from 'react';
import axios from 'axios';
import Grid from 'react-bootstrap/lib/Grid';
import { BlogItem } from './BlogItem.js';

export class FeaturedBlog extends Component {
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
                    <BlogItem 
                        title = { blogItems[0].title }
                        content = { blogItems[0].content }
                        blogUrl = { blogItems[0].blogUrl }
                        image = { blogItems[0].image } />
                    <BlogItem 
                        title = { blogItems[1].title }
                        content = { blogItems[1].content }
                        blogUrl = { blogItems[1].blogUrl }
                        image = { blogItems[1].image } />
                    <BlogItem 
                        title = { blogItems[2].title }
                        content = { blogItems[2].content }
                        blogUrl = { blogItems[2].blogUrl }
                        image = { blogItems[2].image } />
                </div>
            );
        }
        
    }

    render() {

        return(
            <div className = "Blog" id="blog">
                <Grid> <h1 className="Oswald-font blogTitle purpleFont">Blog</h1>
                    { this.renderBlog(this.state.blogs) }</Grid></div>
        );
    }
}