import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    
    render(){
        console.log(this.props.title);
        return(
            <div>
            <MoviePoster image={this.props.image}/>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
           
            <img src={this.props.image} />
            
        )
    }
}

export default Movie;