import React, { Component } from 'react';
import axios from 'axios';

export class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instagram : []
        }
    }
    componentDidMount() {
        axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=20336872.d894268.21278a03c1bc4483a5a4a8f98675ec6e")
            .then (response => {
                const instagram = response.data.data;
                this.setState({ instagram })
            });
    }

    render() {
        return (
        <div className="instagram" id="instagram">
            <h1 className="instagram-title">Instagram</h1>
            
            <div className="instagram-wrapper">
                <ul>
                    { this.state.instagram.slice(0,3).map(post => 
                        <li className="instagram-post" key={post.created_time} >
                        <img 
                            src={post.images.standard_resolution.url} 
                            alt={post.created_time}/> </li>)}
                </ul>

                <ul>
                    { this.state.instagram.slice(3,6).map(post => 
                        <li className="instagram-post" key={post.created_time} >
                        <img 
                            src={post.images.standard_resolution.url}
                            alt={post.created_time} /> </li>)}
                </ul>
            </div>
        </div>
          );
    }
}