import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export class BlogContent extends Component {
    formatDate(date_str) {
        var date = new Date(date_str);
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
        
          var day = date.getDate();
          var monthIndex = date.getMonth();
          var year = date.getFullYear();
        
          return monthNames[monthIndex] + ' ' + day + ' ' + year;
    }
    render() {
        return (
        <Grid>
            <h1 className="Oswald-font blogPageTitle">{ this.props.title }</h1>
            <p className="blogContentDate Oswald-font"> created: { this.formatDate(this.props.date) }</p>
            { this.props.content.map((par) => 
                <p className="blogContentPar">{ par } </p>) }
        </Grid>);
    }
}