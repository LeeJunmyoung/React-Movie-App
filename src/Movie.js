import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    
    static propTypes ={
        title : PropTypes.string.isRequired,
        image : PropTypes.string.isRequired
    }


    render(){
        return(
            <div>
            <MoviePoster image={this.props.image}/>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes={
        image :PropTypes.string.isRequired
    }

    render(){
        return(
           
            <img src={this.props.image} />
            
        )
    }
}

export default Movie;