import React, { Component } from 'react';
import { PlainHeader } from './PlainHeader';
import { BlogHeader } from './BlogHeader';
import { BlogContent } from './BlogContent';
import { Footer } from './Footer';

export class BlogPage extends Component {
    render() {
        return (
            <div className="blogPage">
                <PlainHeader />
                <BlogHeader 
                    imgUrl = { this.props.blog.blog_image }/>
                <BlogContent
                    title = { this.props.blog.title }
                    date = { this.props.blog.created_at }
                    content = { this.props.blog.body } />
                <Footer/>         
            </div>           
        );
    }
}