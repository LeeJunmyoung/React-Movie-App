import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title,image}){
    return(
        <div>
            <MoviePoster image={image}/>
            <h1>{title}</h1>
        </div>
    );
}


function MoviePoster({image}){
    return(
        <img src={image} alt="Movie Poster" />
    )
    
}
MoviePoster.propTypes ={
    image :  PropTypes.string.isRequired
}
 Movie.propTypes ={
    title :  PropTypes.string.isRequired,
    image :  PropTypes.string.isRequired
}


// class Movie extends Component{
    
//     static propTypes ={
//         title : PropTypes.string.isRequired,
//         image : PropTypes.string.isRequired
//     }


//     render(){
//         return(
//             <div>
//             <MoviePoster image={this.props.image}/>
//             <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{

//     static propTypes={
//         image :PropTypes.string.isRequired
//     }

//     render(){
//         return(
           
//             <img src={this.props.image} alt="Movie Poster" />
            
//         )
//     }
// }


export default Movie;