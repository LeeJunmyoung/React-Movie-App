import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {

  
  state={
    beforeMovies:[],
    page:0
  }

  componentWillMount(){
   console.log('will mount first') ;
   window.removeEventListener("scroll", this.handleScroll);
  }
  
  componentDidMount(){
    console.log('did mount third');
    this._getMovies();
    window.addEventListener("scroll", this.handleScroll);
  }

   _getMovies = async() => {
    
    const movies = await this._callApi();
    const beforeMovies= this.state.movies;
    const page = parseInt(this.state.page)+1;
    let viewMovies
    if(page>1)
    viewMovies = [].concat(beforeMovies).concat(movies);
    else
    viewMovies = movies;
    
    return this.setState({
      movies : viewMovies,
      page : page
    });

  }
  
  _callApi=()=>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count&page='+this.state.page)
    .then(response=> response.json())
    //.then(json => console.log(json))
    .then(json => json.data.movies)
    .catch(err=>console.log(err))
  }

  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
    if (scrollHeight - innerHeight - scrollTop < 1) {
      this._getMovies();
    }
  };



  _renderMovies=()=>{
    const movies = this.state.movies.map( (movie,index) => {
      //console.log(movie);
          return <Movie 
                        title={movie.title} 
                        image={movie.medium_cover_image} 
                        key={index} 
                        genres={movie.genres}
                        synopsis={movie.synopsis}
                 />
    });
    return movies;    
  }

  render() {
    console.log('render second');

    const { movies }= this.state;
    return (
      
      <div className={movies ? "App":'App--loading' }>
        {movies ? this._renderMovies():'Loading' }
      </div>
    );
  }
}

export default App;
