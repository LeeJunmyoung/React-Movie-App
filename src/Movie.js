import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title,image,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster image={image} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genes">
                    {genres.map( (genre,index)=> <MovieGenre genre={genre} key={index} /> )}
                </div>
                <p className="Movvie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    );
}


function MoviePoster({image,alt}){
    return(
        <img src={image} alt={alt} className="Movie__Poster" />
    )
    
}

function MovieGenre({genre}){
    return(
        <span className="Movie__genre">{genre} </span>
    )
}


MoviePoster.propTypes ={
    image :  PropTypes.string.isRequired
}
 Movie.propTypes ={
    title :  PropTypes.string.isRequired,
    image :  PropTypes.string.isRequired,
    genres:  PropTypes.string.isRequired,
    synopsis:PropTypes.string.isRequired
}

MovieGenre.prototype={
    genres:  PropTypes.string.isRequired  
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