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

    renderInstagramPosts(posts) {
        if (posts.length != 0) {
            console.log(posts);
            var instaPosts = [];
            for (var i=0; i<6; i++) {
                instaPosts[i] = {
                    'image' : posts[i].images.standard_resolution.url
                }
            }
    
            return (
                <div>
                    <p>{instaPosts[0]}</p>
                    <img src={instaPosts[0]} />
                </div> );
            
            return(<div></div>);
        }
    }

    render() {
        return (
        <div className="instagram" id="instagram">
            <h1 className="Oswald-font instagramTitle">Instagram</h1>
            
            <div class="instagramWrapper">
                <ul>
                    { this.state.instagram.slice(0,3).map(post => 
                        <li className="instagramPosts">
                        <img src={post.images.standard_resolution.url} /> </li>)}
                </ul>

                <ul>
                    { this.state.instagram.slice(3,6).map(post => 
                        <li className="instagramPosts">
                        <img src={post.images.standard_resolution.url} /> </li>)}
                </ul>
            </div>
        </div>
          );
    }
}