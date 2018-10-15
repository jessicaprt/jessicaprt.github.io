import React, { Component } from 'react'; 
import ClipLoader from 'react-spinners/ClipLoader';

export class LoadingIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return(
            <div id="loadingIndicator" className="loadingIndicator">
            <div className="ringLoader">
                <ClipLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#fff'}
                    loading={this.state.loading}
                    /></div></div>
        );
    }
}