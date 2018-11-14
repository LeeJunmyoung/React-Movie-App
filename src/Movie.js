import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({title,image,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster image={image} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genes">
                    {genres.map( (genre,index)=> <MovieGenre genre={genre} key={index} /> )}
                </div>
                <div className="Movie__Synopsis">
                    
                    <LinesEllipsis 
                        text={synopsis}
                        maxLine="5"
                        ellipsis=' ....'
                        trimRight
                        basedOn='letters'
                    />
                </div>
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
    synopsis:PropTypes.string.isRequired
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