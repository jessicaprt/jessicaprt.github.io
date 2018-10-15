import React, { Component } from 'react'; 
import RingLoader from 'react-spinners/RingLoader';

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
                <RingLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#fff'}
                    loading={this.state.loading}
                    /></div></div>
        );
    }
}