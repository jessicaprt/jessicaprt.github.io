import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import axios from 'axios';

import { BlogItem } from './BlogItem';
import { Footer } from './Footer';
import { PlainHeader } from './PlainHeader';

export class AllBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs : []
        }
    }

    componentDidMount() {
        axios.get('./blogs.json')
            .then (response => {
                const blogs = response.data.blogs;
                this.setState({ blogs })
            });
    }

    renderBlogs(blogs) {
        if (blogs.length !== 0) {
            return(
                <div> 
                    { blogs.map((blog) => 
                        <div>
                            <BlogItem
                                title = { blog.title }
                                content = { blog.body }
                                blogUrl = { blog.url }
                                image = { blog.blog_image }
                                route = "./"/>
                            <div className="fBlogItemsLine"></div></div>) } 
                            
                        </div>);
        }        
    }

    render() {
        
        return(
            <div>
                { (this.state.blogs.length !== 0) ? 
                <div>
                    <PlainHeader />
                    <Grid>
                        <h1 className="allBlogsTitle Oswald-font purpleFont">Blog</h1>
                        { this.renderBlogs(this.state.blogs) }
                    </Grid>
                    <Footer/>  
                </div> : null }
            </div>
        );
    }
}