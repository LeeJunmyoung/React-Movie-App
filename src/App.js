import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {

  
  state= {
    greeting:"hello!!!!",
    
  }


  componentWillMount(){
   console.log('will mount first') ;
  }
  
  componentDidMount(){
    console.log('did mount third');
    setTimeout(()=>{
      this.setState({
        movies:[
          {
            title:"Matrix",
            poster:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
          },{
            title:"Full Metal Jacket",
            poster:"http://mblogthumb1.phinf.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w210"
          },{
            title:"Oldboy",
            poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg"
          },{
            title:"Star Wars",
            poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
          },{
            title:'Trainsporting',
            poster:'http://www.latinol.com/media/contenido/images/Trainspotting_poster_1.png'
          }
        ]
      })
    },5000);
  }


  _renderMovies=()=>{
    const movies = this.state.movies.map( (movie, index) => {
          return <Movie title={movie.title} image={movie.poster} key={index} />
    });
    return movies;    
  }

  render() {
    console.log('render second');


    return (
      <div className="App">
        {this.state.movies ? this._renderMovies():'Loding' }
      </div>
    );
  }
}

export default App;
