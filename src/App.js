import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movieTitles=[
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
];

const movieImages=[
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
  "http://mblogthumb1.phinf.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w210",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} image={movieImages[0]}/>
        <Movie title={movieTitles[1]} image={movieImages[1]}/>
        <Movie title={movieTitles[2]} image={movieImages[2]}/>
        <Movie title={movieTitles[3]} image={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
